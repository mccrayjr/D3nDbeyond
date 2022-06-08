#!/usr/bin/env python3
from urllib import response
import boto3 #allows you to directly create, update, and delete AWS resources from your Python scripts

# For now we deploy this to sandbox.
boto3.setup_default_session(profile_name='sandbox')

class DnDeploy:
  STACK_LIST = []
  STACK_DICT = dict(enumerate(STACK_LIST, 1))

  def __init__(self, stack_dict_item):
    self.client = boto3.client('cloudformation')
    self.stack_name = stack_dict_item['stackName']
    self.template_path = stack_dict_item['templatePath']

  @staticmethod
  def mainPromptFactory():
    for key, val in DnDeploy.STACK_DICT.items():
      print("({key}) {name}").format(key=key, name=val['name'])
    number = input('Choose a num fam: ')
    if not number.isdigit():
      print('value was NOT a number, just pick a num fam')
      return DnDeploy.mainPromptFactory()
    if int(number) not in DnDeploy.STACK_DICT.keys():
      print('value was NOT an option, let\'s try that again')
      return DnDeploy.mainPromptFactory()
    return DnDeploy(DnDeploy.STACK_DICT[int(number)])

  def doesStackExist(self):
    #check docs here
    stacks = self.client.list_stacks(
      StackStatusFilter=[
        'CREATE_COMPLETE',
        'UPDATE_COMPLETE',
        'UPDATE_ROLLBACK_COMPLETE',
        'ROLLBACK_COMPLETE'
      ]
    )
    for instance in stacks['StackSummaries']:
      if 'DeletionTime' in instance:
        continue
      if instance['StackName'] == self.stack_name:
        return True
      return False

  def launchStack(self):
    with open(self.template_path, 'r') as template_file:
      template_yml = template_file.read()
    stackExists = self.doesStackExist()
    try:
      if stackExists:
        #check the docs
        response = self.client.update_stack(
          StackName=self.stack_name,
          TemplateBody=template_yml,
          Capabilities=[
            'CAPABILITY_NAMED_IAM',
            'CAPABILITY_AUTO_EXPAND'
          ],
        )
      if not stackExists:
        response = self.client.create_stack(
          StackName=self.stack_name,
          TemplateBody=template_yml,
          Capabilities=[
            'CAPABILITY_NAMED_IAM',
            'CAPABILITY_AUTO_EXPAND'
          ],
        )
      print(response)
    except self.client.exceptions.ClientError as error:
      print(str(error))
      return 1

def main(): #check docs
  d3nd_deploy = DnDeploy.mainPromptFactory()
  d3nd_deploy.launchStack()

if __name__ == '__main__':
  main()

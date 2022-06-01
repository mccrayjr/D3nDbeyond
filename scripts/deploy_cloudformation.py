#!/usr/bin/env python3
import boto3 #allows you to directly create, update, and delete AWS resources from your Python scripts

# For now we deploy this to sandbox.
boto3.setup_default_session(profile_name='sandbox')


export class Character {
  constructor(name, initiative, health = 0, status = []){
    this.name = name;
    this.initiative = initiative;
    this.health = health;
    //max health???
    this.status = status;
    this.isTurn = false;
  }

  //Take Damage
  takeDamage(num){
    this.health -= num;
  }

  takeHealth(num){
    this.health += num;
  }

  setStatus(status){
    this.status.push(status)
  }

  removeStatus(status){
    this.status.filter(statusSingular => (statusSingular !== status))
  }

  //static method for reseting all characters initatives or other thoughts
}


export class Monster extends Character {
  constructor(name, initiative, health, status = [], monsterData){
    super(name, initiative, health, status)
    this.monsterData = monsterData;
  }
}

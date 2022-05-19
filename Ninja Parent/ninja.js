//Parent ninja class
class Ninja {
  constructor(name, health, speed, strength){ 
    this.name = name;//add an attribute name
    this.health = 10;//add an attribute health
    this.speed = 3;//add attribute speed w/ default value 3
    this.strength = 3;//add attribute strength w/ default value 3
  }
  //add a method: sayName() - This should log that Ninja's name to the console
  sayName(){
    // console.log('Name = ${this.name}');
    console.log(this.name);
  }
  //add a method: showStats() 
  //This should show the Ninja's name, strength, speed, and health.
  showStats(){
    console.log(this.name, this.strength, this.speed, this.health);
  }
  //add a method: drinkSake() - This should add +10 Health to the Ninja
  drinkSake(){
    this.health += 10;
    console.log(this.health);
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
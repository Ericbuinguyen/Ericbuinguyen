//Parent ninja class
class Ninja {
  constructor(name, health = 10, speed = 3, strength = 3){ 
    this.name = name;//add an attribute name
    this.health = health;//add an attribute health
    this.speed = speed;//add attribute speed w/ default value 3
    this.strength = strength;//add attribute strength w/ default value 3
  }
  //add a method: sayName() - This should log that Ninja's name to the console
  sayName(){
    // console.log('Name = ${this.name}');
    console.log(this.name);
  }
  //add a method: showStats() 
  //This should show the Ninja's name, strength, speed, and health.
  showStats(){
    console.log("Name: " + this.name, ", Strength: " + this.strength, ", Speed: " + this.speed, ", Speed: " +this.health);
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

// Child class
class Sensei extends Ninja {
  constructor(name) {
    super(name, 200, 10, 10);
    this.wisdom = 10;
  }

  speakWisdom() {
    super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.");
  }

  // showStats(){
  //   console.log("Name: " + this.name, this.strength, this.speed, this.health);
  // }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


  // sayName() {
  //     const childName = super.sayName();
  // }

  // drinkSake() {
  //     const childSake = super.drinkSake();
  //     console.log(this.health);
  // }



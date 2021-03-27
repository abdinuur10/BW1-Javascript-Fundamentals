// ==== CLASSES ====

// Complete these tasks using class only, you don't need to do any prototype. You can do these problems as a group.


/*
  TASK 1
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
            - "{name} has taken off"
        + If a plane lands, its `isFlying` property gets set to false.
            - "{name} has just landed"
*/


class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

  

// UNCOMMENT THE OBJECT AND CONSOLE LOG BELOW TO TEST

  let boeing777 = new Airplane({
      name: "Boeing 777"
  })
  

  console.log(boeing777.takeOff()) // Boeing 777 has taken off
  console.log(boeing777.land()) // Boeing 777 has just landed



  /*
    TASK 2
      - Write a Person class whose constructor initializes `name` from arguments.
      - All instances of Person should also initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 3 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.check()`:
          + It should return a string with `{name} is currently full` or `{name} needs some food`
          + You should check if the emptyStomach's length is less than 3.
  */
  
 class Person {
  
  }

// UNCOMMENT THE OBJECT AND CONSOLE LOG BELOW TO TEST

//   let ahmed = new Person({
//       name: "Ahmed"
//   })

//   ahmed.eat("Chicken") // adds chicken to stomach
//   ahmed.eat("Eggs") // adds Eggs to stomach
//   ahmed.eat("Water") // adds water to stomach
//   ahmed.poop() // This empties ths stomach
  

//   console.log(ahmed.check()) // Ahmed needs some food
  
 
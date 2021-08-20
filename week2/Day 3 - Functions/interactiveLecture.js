/* In this interactive lecture, we will cover:
  - How to write a basic function
  - How to call a function
  - Parameters
*/

// So yesterday we talked about a battle between Jon Snow and Jamie Lannister. We used conditional logic to determine battle scenarios, and used arrays to manage Jon's backpack. But, Jon is on a long and treacherous task back to Winterfell. It stands to reason that he might come across many enemies. Do we really want to rewrite the same blocks of code over and over again, to determine who Jon might be and who he might lose to?

// This is where functions come in. Functions allow us to perform the same block of code many times, without having to rewrite the entire block of code. They even allow us to take in parameters to slightly modify the data that the function uses. 

// First, let's create a variable that tracks Jon's health. 

let jonSnowHealth = 100

// Now, let's create a simple function to see if Jon Snow is alive or not, and then console.log's the result.

function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log('Jon is alive!')
  } else {
    console.log('RIP Jon Snow.')
  }
}

// So we have written this function, but you might notice, it has not actually run yet. This is because functions do not run until they are called. Let's call the above function.

isJonAlive()

// So now, at any point in time, we can call this function we have just created in order to find out if Jon is alive or not.

// Now, let's create a function that can be used every time Jon is attacked.

function surpriseAttack(attack) {
  jonSnowHealth -= attack
}

// Note, we added a parameter to the function. This means, when we call the function, we will have to pass in an argument, or a value, for the attack parameter. Let's have someone attack Jon Snow. A Dothraki that will deal 20 damage.

surpriseAttack(20)

// With our function, we can call our block of code over and over again. Call the function again, because Jon just got attacked by a Lannister guard that was tracking him. The guard does 12 damage.

surpriseAttack(12)

// If that wasn't all, Jon gets attacked by some bandits on the road, and receives another 6 damage.

surpriseAttack(6)

// At this point Jon has been attacked a few times. It would probably be a good time to check and make sure he is still alive. Call your isJonAlive function.

isJonAlive()

// Thinking it about it further, shouldn't we check to see if Jon is alive after each time he gets attacked? We could call the isJonAlive function after each time he gets attacked. But, there is an easier way to do that. Modify your surpriseAttack function to call isJonAlive after it has run all it's other code.

 function surpriseAttack(attack) {
   jonSnowHealth -= attack
   isJonAlive()
 }

// Yes, you can call functions from almost anywhere, including from inside another function.

// It is important to know that functions can be setup to have as many parameters as you would like. In this next function, we will use two.

// Let's create another function that allows 2 people to greet each other.

function greeting(person1, person2) {
  console.log(`${person1} and ${person2} say hello to each other.`)
}

greeting('Jon Snow', 'Ned Stark')

// So far, we have just been console logging in our functions. But, functions can actually return a value back to it's call site. Let's create a function to represent a dice role.

function rollDice() {
  let possibleRoles = [1,2,3,4,5,6]
  let randomNumber = Math.floor(Math.random() * possibleRoles.length)
  return possibleRoles[randomNumber]
}

let firstRoll = rollDice()
let secondRoll = rollDice()

// Now, let's take this one step further. Let's create a function that calls rollDice twice, and multiplies the returned rolls together.

function diceMultiplier() {
  let firstRoll = rollDice()
  let secondRoll = rollDice()

  return firstRoll * secondRoll
}

let multipliedNumber = diceMultiplier()

// * Make sure to explain scope in the above example (firstRoll and secondRoll used on likes 80 & 81, as well as 86 & 87).





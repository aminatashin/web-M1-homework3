/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let numbers = [1,2,3,4,5]
console.log(numbers)

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let contact = {
    name: 'Amin',
    surename: 'Atashkhayer',
    age: 29,
    emailAddress: 'amin.atashin@gmail.com'
}
console.log(contact)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

contact.drivingLicense=true
//contact["Driving License"] = true
//let drivingLicense = 'Driving License'
//contact[drivingLicense] = true
console.log(contact)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete contact.drivingLicense
console.log(contact)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let student ={
    name:'Andrea',
    surename:'Rosso',
    age:25,
    emailAddress:'andrea@gmail.com'
}
console.log(student.emailAddress !== contact.emailAddress)
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car ={
    brand:"BMW",
    model:2021,
    licensePlate:'44d65',
}

let car2 ={}
Object.assign(car2,car)
car2.licensePlate='88M99'

let car3 ={}

Object.assign(car3,car)
car3.licensePlate='622A85'

let car4 = {}

Object.assign(car4,car)
car4.licensePlate = '26G46'




console.log(car)
console.log(car2) 
console.log(car3)
console.log(car4)


/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/*let carsForRent = [
    {name:'car', brand: 'BMW', model: 2021, licensePlate: '44d65'},
    { name: 'car2', brand: 'BMW', model: 2021, licensePlate: '88M99' },
    {name:'car3' ,brand: 'BMW', model: 2021, licensePlate: '622A85' },
    {name:'car4', brand: 'BMW', model: 2021, licensePlate: '26G46' }
]*/
let carsForRent = [car, car2, car3, car4]
console.log(carsForRent)
/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop()
carsForRent.shift()
console.log(carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(typeof car, typeof car.licensePlate, typeof car.brand)
console.log(carsForRent[0].brand , carsForRent[0].licensePlate)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = []
carsForSale = carsForSale.concat(car,car2,car3)
console.log(carsForSale)
let totalCars = {
    carsForSale: carsForSale.length,
    carsForRent: carsForRent.length
}
console.log(totalCars)
 


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let number of carsForSale)
console.log(number)
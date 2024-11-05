type Pizza = {
    name: string 
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: string
}

const menu = [
    {name: "Marg", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue = []

/*
* Utility function that takes a pizza object and
* adds it to the menu
*/
function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

/*
* Add another utility function that takes a pizza name and
* 1. Finds that pizza object in the menu,
* 2. Adds the income to the cashInRegister,
* 3. Pushes a new "order object" to the orderQueue
    (e.g {pizza: selectedPizzaObjectFromStep1, status: "ordered"})
* 4. Returns the new order (just in case we need it later)
*/
function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if(!selectedPizza) {
        console.error(`${pizzaName} does not exist in menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" } 
    orderQueue.push(newOrder)
    return newOrder
} 

/**
 * Add another utility function, completeOrder that takes an orderId as a parameter 
 * finds the correct order in the orderQueue and marks its status as completed.
 * For good measure return the found order from the function
 * 
 * Note: Ensure that we're adding IDs to our orders when we create new orders
 * Use a global "nextOrderId" variable and increment it every time a new order is created
 * to simulate real IDs being managed for us by a database 
 */

function completeOrder(orderId: number){
    const order = orderQueue.find(order => order.id === orderId) 
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
const flavors = { 
    vanilla: "3", 
    stawberry: "1", 
    coffee: "1",
    mint: "0",     
}
const User = {"FirstName": "John", "LastName": "Doe",}

console.log("Welcome to Froyo," + User.FirstName + " " + User.LastName + "!");
console.log("Your Order:");
console.log(flavors.vanilla + " scoops of vanilla, " + flavors.stawberry + " scoops of strawberry, " + flavors.coffee + " scoops of coffee, " + flavors.mint + " scoops of mint.");


// function submitOrder(flavor) {
//     const message = `1 order submitted for ${flavor}`;
//     document.getElementById('orderMessage').textContent = message;
// }

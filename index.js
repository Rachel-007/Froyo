const flavors = { 
    vanilla: "3", 
    strawberry: "1", 
    coffee: "1",
    mint: "0",     
}

const User = {"FirstName": "John", "LastName": "Doe",}

console.log("Welcome to Froyo," + User.FirstName + " " + User.LastName + "!");
console.log("Your Order:");




for (const flavor in flavors) {
    console.log(`${flavors[flavor]} scoops of ${flavor}`);
}

const totalScoops = Object.values(flavors).reduce((total, num) => total + parseInt(num), 0);

console.log(`Total scoops ordered by ${User.FirstName} ${User.LastName}: ${totalScoops}`);




console.log("Enjoy your froyo!");
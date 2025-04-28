const input =
  "Strawberry, Vanilla, Coffee, Mint, Vanilla, chocolate, chocolate";
const flavors = input.split(", ");
console.log(flavors);

function froyo(flavors) {
  const counts = {};
  for (let i = 0; i < flavors.length; i++) {
    if (counts[flavors[i]]) {
      counts[flavors[i]] = counts[flavors[i]] + 1;
    } else {
      counts[flavors[i]] = 1;
    }
  }
  return counts;
}
console.log(froyo(flavors));

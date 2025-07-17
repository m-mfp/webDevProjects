// Inventory Management

let inventory = [];

function findProductIndex(productName) {
  const index = inventory.findIndex(product => product.name.toLowerCase() === productName.toLowerCase());
  return index;
}

function addProduct(productObject) {
  productObject.name = productObject.name.toLowerCase()
  if (inventory.find(product => product.name === productObject.name)) {
    const productIndex = findProductIndex(productObject.name);
    inventory[productIndex].quantity += productObject.quantity;
    console.log(`${inventory[productIndex].name} quantity updated`);
  } else {
    inventory.push(productObject);
    console.log(`${productObject.name} added to inventory`);
  }
}

function removeProduct(productName, productQuantity) {
  productName = productName.toLowerCase()
  const productIndex = findProductIndex(productName);
  
  if (productIndex == -1) {
    console.log(productName + " not found");
  } else {
    if (inventory[productIndex].quantity < productQuantity) {
      console.log(`Not enough ${productName} available, remaining pieces: ${inventory[productIndex].quantity}`);
    } else {
      inventory[productIndex].quantity -= productQuantity;
      console.log(`Remaining ${productName} pieces: ${inventory[productIndex].quantity}`);
      
      if (inventory[productIndex].quantity == 0) {
        inventory = inventory.slice(productIndex + 1)
      }
    }
  }
}

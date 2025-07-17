let lunches = [];

function addLunchToEnd(lunchMenu, lunchItem) {
  lunchMenu.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunchMenu;
}

function addLunchToStart(lunchMenu, lunchItem) {
  lunchMenu.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunchMenu;
}

function removeLastLunch(lunchMenu) {
  if (lunchMenu.length > 0) {
    let lunchItemRemoved = lunchMenu.pop();
    console.log(`${lunchItemRemoved} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.")
  }
  return lunchMenu;
}

function removeFirstLunch(lunchMenu) {
  if (lunchMenu.length > 0) {
    let lunchItemRemoved = lunchMenu.shift();
    console.log(`${lunchItemRemoved} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.")
  }
  return lunchMenu;
}

function getRandomLunch(lunchMenu) {
  if (lunchMenu.length > 0) {
    let randomNum = Math.floor(Math.random() * lunchMenu.length)
    let selectedLunch = lunchMenu[randomNum]
    console.log(`Randomly selected lunch: ${selectedLunch}`)
  } else {
    console.log("No lunches available.")
  }
}

function showLunchMenu(lunchMenu) {
  if (lunchMenu.length > 0) {
    console.log(`Menu items: ${lunchMenu.join(", ")}`)
  } else {
    console.log("The menu is empty.")
  }
}


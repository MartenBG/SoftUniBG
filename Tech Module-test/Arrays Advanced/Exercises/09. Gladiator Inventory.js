function inventoryEquipment(inventory) {
    currentInventory = inventory.shift().split(" ")

    for (let commandsItems of inventory) {
        let currentCommandsAndItems = commandsItems.split(" ");
        let command = currentCommandsAndItems[0];
        let item = currentCommandsAndItems[1];
        if (command === "Buy") {
            if (!currentInventory.includes(item)) {
                currentInventory.push(item);
            }
        } else if (command === "Trash") {
            if (currentInventory.includes(item)) {
                currentInventory.splice(currentInventory.indexOf(item), 1);
            }
        } else if (command === "Repair") {
            if (currentInventory.includes(item)) {
                currentInventory.splice(currentInventory.indexOf(item), 1);
                currentInventory.push(item);
            }
        } else if (command === "Upgrade") {
            let currentItem = item.split("-")
            let first = currentItem[0];
            // let second = currentItem[1];
            if (currentInventory.includes(first)) {
                currentInventory.splice(currentInventory.indexOf(first)+1, 0, currentItem.join(":"));
            }
        }

    }

    console.log(currentInventory.join(" "));
}

inventoryEquipment(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
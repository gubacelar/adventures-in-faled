Hooks.on('preUpdateActor', async (actor, updateData, options, userId) => {
  if (updateData.data.attributes.hp && updateData.data.attributes.hp.value === updateData.data.attributes.hp.max) {
    // Personagem está usando um long rest
    let itemToDeleteName = "Nome do item";
    let itemToDelete = actor.items.find(i => i.name === itemToDeleteName);
    if (itemToDelete) {
      await actor.deleteEmbeddedDocuments("Item", [itemToDelete._id], {deleteAll: false});
      ui.notifications.notify(`O item "${itemToDeleteName}" foi removido da ficha do personagem "${actor.name}" durante o long rest.`);
    }
  }
});

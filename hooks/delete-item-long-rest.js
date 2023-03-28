Hooks.on('dnd5e.dnd5e.preLongRest', async (actor) => {
    // Personagem está usando um long rest
    let itemToDeleteName = "Vitality Coconut Water";
    let itemToDelete = actor.items.find(i => i.name === itemToDeleteName);
    if (itemToDelete) {
      await actor.deleteEmbeddedDocuments("Item", [itemToDelete._id], {deleteAll: false});
    }
});


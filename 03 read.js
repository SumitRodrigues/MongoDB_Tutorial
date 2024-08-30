db.inventory.find() //- Fetch all documents
db.inventory.find({}) //- Fetch all documents

db.inventory.find({qty:25})
db.inventory.find({tags: {$in: ["gel", "blank"]}})
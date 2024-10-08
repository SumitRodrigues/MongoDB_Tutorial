db.inventory.insertOne(
    { "item": "envelopes", "qty": 100, type: "Self-Sealing" },
    { writeConcern: { w: "majority", wtimeout: 100 } }
)



db.inventory.insertMany([{ "item": "envelopes", "qty": 100, type: "Self-Sealing" },
{ writeConcern: { w: "majority", wtimeout: 100 } },
{ "item": "envelopes", "qty": 100, type: "Self-Sealing" },
{ writeConcern: { w: "majority", wtimeout: 100 } },
{ "item": "notes", "qty": 60, type: "Self-Sealing" },
{ writeConcern: { w: "majority", wtimeout: 100 } },
{ "item": "books", "qty": 300, type: "Self-Sealing" },
{ writeConcern: { w: "majority", wtimeout: 100 } }
]
)

db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])
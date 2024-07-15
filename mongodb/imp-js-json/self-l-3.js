db.products.find({})

// db.products.find({"price":{$eq: 19.99}})
// db.products.find({"price":{$ne:19.99}})
// db.products.find({"title":{$in: ["Powder Canister", "Red Nail Polish","Red Lipstick"]}})
// db.products.find({"title":{$nin: ["Powder Canister", "Red Nail Polish","Red Lipstick"]}})
// db.products.find({"weight":{$gt: 3}})
// db.products.find({"weight":{$gte: 3}})
// db.products.find({"weight":{$lt: 3}})
// db.products.find({"weight":{$lte: 3}})

// db.products.find({$and: [{"id":{$lt: 10}} ,{"weight":{$lte:10}}]})
// db.products.find({$or:[{"id":{$eq:10}} ,{"weight":{$eq:3}}]})
// db.products.find({$nor:[{"id":{$eq:10}} ,{"weight":{$eq:3}}]})

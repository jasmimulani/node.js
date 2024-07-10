db.user.find({})

// db.user.find({"movies.floop":"sui-dhaga"})

// db.user.findOne({filter} ,{update data} ,{upsert:true})

// db.user.updateMany()

// db.user.updateOne({gender:'female'},
// {$set:{age:20 , email:'joly@test.in'}},
// {upsert:true})

// db.user.updateMany({gender:'female'},
// {$set:{
//     passion:'make-up',
//     hobbies:'shoping'
// }}, 
// {upsert:true}
// )
 // db.user.find()
// db.user.find({"movies.floop":'sui-dhaga'})
// db.user.findOne({gender:"female"})


//  data update 
// db.uder.updateOne({filter},{update date} , {upsert:true})

// db.user.updateMany()

// db.user.updateOne({gender:"female"},
// {$set:{age:22, email:'jolly@text.in'}},
// {upsert:true})

// db.user.updateMany({gender:'female'},
// {$set:{
//     passion:'make-up',
//     hobbies:'shoping'
// }}, 
// {upsert:true}
// )


// db.user.deleteOne({filter})
// db.user.deleteOne({_id:ObjectId("668d584f94c3a02d26e8e3e8")})

// db.user.deleteMany({gender:"female"})

// db.user.drop()
// show coll
// db.dropdatabase()


// -------------------------------------------------------

db.client_master.find({})

// db.client_master.updateOne({name:"jasmi"},{$rename: {name:'NAME'})
// db.client_master.updateOne({name:"srushti"}, {$unset: { "mobile" })
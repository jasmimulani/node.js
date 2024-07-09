// use dbname

// create collection

db.createCollection("user");

//  insert data(single)

db.user.insertOne({
  name: "john peter",
  age: 22,
  email: "john@text.in",
});

//  inset multiple data

db.user.insertMany([
  {
    name: "jolly peter",
    age: 21,
    gender: "female",
  },
  {
    name: "virat kohli",
    age: 34,
    email: "viru@gmail.com",
    hobbies: ["cricket", "music", "dancing"],
  },
  {
    name: "anushka shrma kohli",
    gender: "female",
    movies: {
      supar_duper: "pk",
      most_famous: "sultan",
      floop: "sui-dhaga",
    },
  },
]);

// -----------------------------------------

db.createCollection("client_master");

db.client_master.insertOne({
  name: "jasmi",
  address: "33/A",
  email: "jasmi@gmail.com",
});

db.client_master.insertMany([
  {
    name: "srushti",
    age: 20,
    mobile: 8907654567,
    email: "sru@gmail.com",
    gender: "female",
  },

  { name: "ashiti", age: 21, city: "surat", address: "22/B" },

  { name: "vishva", skill: "cooking", age: 20 },
]);


db.client_master.find()

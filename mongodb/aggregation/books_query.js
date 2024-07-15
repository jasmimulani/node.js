// db.books.find({})

//  db.books.find({"country":"Italy" , "pages":928})

// db.books.aggregate([
//     {
//         $match: {"country":"Italy" , "pages":928}
//     }
//     ])

// db.books.find({} ,{"author":1 , country:1 ,_id:0})
// db.books.find({}).select({pages:1,'title':1})
// db.books.find({}).project({"author":1 , "title":1})

// db.books.aggregate([
//      {
//          $project: {
//              author:1,
//              title:1,
//              country:1,
//              _id:0
//          }
//          {
//              $match: {country:"Denmark"}
//          }
//     }
//     ])

// db.books.find({}).sort({"country":1, pages:-1})

// db.books.aggregate([
//     {
//         $project: {
//             year: 1,
//             title: 1,
//             _id: 0
//         }
//     }
//                 {
//         $sort: { "year": -1 }
//     }
//             }
// ])

// db.books.find({}).limit(5).skip(10)

// db.books.aggregate([
//      {$skip: 10},
//      {$limit: 5},
//     ])

// db.books.find({}).count()

// db.books.aggregate([
//     {$match: {}},
//     {$count:"total is"}
//     ])

// db.books.aggregate([
//       {
//           $group: { _id: "$country",
//           total:{
//               $sum:1
//           },

//           },
//       }
//     ])


// db.student.insertMany([
//     {
//       "studentId":"std001",
//       "studName":"jasmi",
//       "course":"full-stack",
//       "faculty":"t001"
//     },
//      {
//       "studentId":"std002",
//       "studName":"srushti",
//       "course":"munch-stack",
//       "faculty":"t002"
//     },
//      {
//       "studentId":"std003",
//       "studName":"vishva",
//       "course":"ios-devloper",
//       "faculty":"t003"
//     },
//      {
//       "studentId":"std004",
//       "studName":"krisha",
//       "course":"ul/ux devloper",
//       "faculty":"t002"
//     },
//      {
//       "studentId":"std005",
//       "studName":"ashiti",
//       "course":"python-stack",
//       "faculty":"t003"
//     },

// ])

// db.teacher.insertMany([
//     {
//         "teachrId":"t001",
//         "teacherName":"sanjna",
//         "hobbies":["photography","management"]
//     },
//     {
//         "teachrId":"t002",
//         "teacherName":"kajal",
//         "hobbies":["teaching","management"]
//     },
//     {
//         "teachrId":"t003",
//         "teacherName":"kiran",
//         "hobbies":["teaching","management"]
//     }
//     ])


// db.student.find()
// db.teacher.find() 

// db.student.aggregate([
//     {
//         $lookup: {
//             from: "teacher",
//             localField: "feculty",
//             foreignField: "teacherId",
//             as: "details:"
//         }
//     },
    
// ])

db.teacher.aggregate([
    {
        $unwind: "$hobbies"
    }
    ])

const http = require('http');

//  const server = http.createServer((req , res) =>{
//     res.setHeader('content-type' ,"text/html")
//     res.write('welcome to nodejs');
//     res.end('<h1> thank for con nect with me </h1>');
//    res.setHeader("dummy" ,'hello world')
//    res.setHeader("content-type",'application/json');
//    res.setHeader("content-type",'text/html');
//    res.end('<h1> end</h1>')
         
//  })

// ------------------------------------------------ second method -----------------------

  const server = http.createServer();

    server.on("request",(req,res) =>{
      // res.setHeader("content-type" ,'text/html')
      // res.write('welcome to node')
      // res.end('<h2> this is a second method end</h2>')

      // res.setHeader("jasmi" ,"hello world")
      res.setHeader("content-type","application/json");
       const responsedata =`[{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 10,
        "id": 100,
        "title": "at nam consequatur ea labore ea harum",
        "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
      }]`
      res.end(responsedata)
      // res.end('<h1> this is end</h1>')
    })


 server.listen(1122,() =>{
    console.log(`server start at http://localhost:1122`);
 });



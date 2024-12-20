const http = require('http')
   const user= [
    {
      "id": 1,
      "name": "Leanne Graham",
      "age": 29,
      "profession": "Web Developer",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "city": "Gwenborough"
      },
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "age": 23,
      "profession": "UI & UX",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "city": "Wisokyburgh"
      },
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "age": 32,
      "profession": "Full Stack Developer",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "city": "McKenziehaven"
      },
      "phone": "1-463-123-4447"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "age": 27,
      "profession": "Android Developer",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "city": "South Elvis"
      },
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "age": 25,
      "profession": "IOS Developer",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "city": "Roscoeview"
      },
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "age": 23,
      "profession": "Flutter",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "city": "South Christy"
      },
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "age": 19,
      "profession": "Marketing",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "city": "Howemouth"
      },
      "phone": "210.067.6132"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "age": 30,
      "profession": "Data Science",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "city": "Aliyaview"
      },
      "phone": "586.493.6943 x140"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "age": 28,
      "profession": "React",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "city": "Bartholomebury"
      },
      "phone": "(775)976-6794 x41206"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "age": 25,
      "profession": "Gamer",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "city": "Lebsackbury"
      },
      "phone": "024-648-3804"
    }
  ]


  const server = http.createServer();

 server.on("request" ,(req,res) =>{
    // console.log(req.url);
    let items = req.url.split("/");
    console.log(items);
     if(items[1]==='product'){
       res.setHeader("contect-type" ,"text/html");
       res.write("<h2>welcome product page</h2>");
      res.end();
    }
    else if(items[1]==='about'){
      res.setHeader("content-type" ,'text/html');
      res.write("<h2>welcome to about page</h2>");
      res.end();
    }
    
    else if(items[1] ==='user'){
      res.setHeader("content-type","application/json");
      if(items.length === 3){
        let userind = +items[2];
        res.write(JSON.stringify(user.filter(e => e.id === userind)));
      }
      else
      res.write(JSON.stringify(user))
      res.end();
    }
    else {
        res.setHeader("content-type" ,"text/html");
      res.write(`<h2 style ="color:red">page not found....</h2>`);
      res.end()
    }
 })

 server.listen(1234,() =>{

   console.log(`server start at http://127.0.0.1:1234`);
   
 })
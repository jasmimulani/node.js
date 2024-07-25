// let a = 20;
// console.log(a);

// let firstname:string = 'jasmi'
// console.log(firstname);

// --------------------- specific type in array---------------------------
// const names: string[] = [];

// names.push("jasmi");
// // names.push(3);  // error tyoe was string and push argument type is number
// console.log(names);

// ---------------------- readonly----------------------------

// const names1:readonly string[] =["jasmi"];
// // names1.push("mulani")   // error readonly we can not add or write in this array
// console.log(names1);

// ------------------------ interface --------------------------

// const number = [1,2,3];
// number.push("2") // error autometiclly type define as number
// number.push(4);
// console.log(number);

// const number = ["1","2","3"];
// number.push("2") 
// number.push(4);  // error autometically type define as string

// ------------------
// const number = [1,2,3];
// number.push(4);
// console.log(number);

// let head: number = number[0];
// console.log(head);

// -------------------  tuple -------------------------
//  using tuoe we can add any types of value but tuple is effect to our define types order

// how to define tuple
// let tuple:[number , boolean , string];

// tuple = [5,true,"coding"];
// console.log(tuple);

// ---------- error in this case like that -------
//  always meter our order how to add our order and value we cn aaply the value line by line as define our tuple

// let tuple1 :[number ,  string ,boolean]
// tuple1 = ['hello' , false , 3]

// ------------------------- readonly tuple-------------------------------------

// let tuple2: readonly[number ,string];
// tuple2=[5 ,'hello'];
// // tuple2.push("how are you");
// console.log(tuple2);

// ---------------------object type -------------------------------

// const car: {type :string , model: string , year:number} ={  type:'toyota',model:'corolla', year:2006 };
// console.log(car);

// ----------------------- type interface--------------------------------

// const car1 ={
//     type:'toyota',
//     // type:2
//     };
//     car1.type = 'forshe'
//     // car1.type =2
//     // car1.type = 2 // error autometicall type srting because type not define and directly value define to string so autometically interface can define type string
//     console.log(car1); 


// ----------------------- enums-----------------------------------
//  ----------------enums default ------------------
// enum j{
//     north,
//     east,
//     south,
//     west
// }
// let k = j.north;
// console.log(k);

// --------------------- enum initialized-----------------
//  only number can initialized not a string oe boolean value

// enum cardinaldirections{
//     north = 1,
//     east,
//     south,
//     west
// }
// console.log(cardinaldirections.north);
// console.log(cardinaldirections.east);
// console.log(cardinaldirections.west);
// console.log(cardinaldirections.south);

// ----------------------------enums fully initialized
//  number , string , boolean value assign
// enum statuscode {
//     notfound='xyz',
//     success =200,
//     accepted=202,
//     badrequest = 'false'
// }
// console.log(statuscode.notfound);
// console.log(statuscode.success);
// console.log(statuscode.accepted);
// console.log(statuscode.badrequest);

//---------------------aliases--------------------------------------

// type caryear = number
// type cartype = string
// type carmodel =string
// type carbuy = boolean

//  type car ={
//     year:caryear,
//     type:cartype,
//     model:carmodel,
//     buy:carbuy
//  }

//  const caryear:caryear =2001
//  const cartype: cartype='toyota'
//  const carmodel :carmodel ='corolla'
//  const carbuy : carbuy = true

//  const car:car={
//     year:caryear,
//     type:cartype,
//     model:carmodel,
//     buy:carbuy
//  };
//  console.log(car);
 
// ----------------------- interfaces----------------------
//   create interfce in interface list only that value we can add not less or not more 

// interface Rectangle{
//     heigth :number,
//     width: number,
// }
// const rectangle: Rectangle = {
//    heigth:20,
//    width:10,
// };
// console.log( rectangle);

// ----------  extending interfaces-------------------

// interface Rectangle {
//     height : number 
//     width: number
// }
// interface ColorRactangle extends Rectangle{
//     color:string
// }
//  const Colorractangle: ColorRactangle ={
//     height:20,
//     width:10,
//     color:'red'
//  };

//  console.log(Colorractangle);
 
// ---------union | or ------------------------------------

// function statuscode1(code : string | number){
//     console.log(`my statusecode is ${code}.`)

// }
// statuscode1(200);
// statuscode1('successs');


// ---------function----------------------------------------
//  -------------return type---------------------

// function getTime():number{
//     return new Date().getTime();
// }

// console.log(getTime());


// --------------- void return type--------------

// function hello():void{
//     console.log(1245);
//     console.log('hello');
    
// }
// hello();
        
// ---------------perameters--------------

// function multiplication (a:number , b:number){
//     return a*b;
// }
// console.log(multiplication(1,8));

// ------------optional perameters-----------------
// in optional case we not apply the value toc variavle that type now throw to error (?) marks sign is represent to optional perameters

// function add(a:number , b:number, c?:number){
//     return a+b +(c ||0);
// }
// console.log(add(1,4 ,2));
// console.log(add(1,4));


// -----------------------------defulat perameter --------------------------
// function pow(value: number , exponent:number=10){
//     return value ** exponent;
// }
// console.log(pow(2));

// --------- casting with (as)-------------------
//  space counted.......

// let x: unknown ='hello';
// console.log((x as string).length
// );

// -----------casing with (<>)---------------
//  spce will be counted

// let x: unknown ='hello coder';
// console.log((<string>x).length);

// ----------- class--------------------
// ------------------- member-type----------

//  class person{
//     name: string;
//  }

//  const Person1 = new person();
//  Person1.name = 'jasmin';
//  console.log(Person1);

// --------------------memver: visiblilty
// --->public
// --->private
// --->protected

// class person2{
//     private name:string;

//     public constructor(name:string){
//         this.name = name;
//     }
//     public getname(): string{
//         return this.name
//     }
// }
  
// const person3 = new person2('jasmi');
// console.log(person3.getname());

// ------------------perameter properties------------------------
// class person4 {
//     public constructor(private name:string){}
//     public getname(): string{
//         return this.name;
//     }
// }
// const person5 = new person4("jasmin");
// console.log(person5.getname());


// -------------------------------------------------------------------- lecture prectice ---------------------------------------------------------------------------------------

// let data : number[] =[11 , 22 ,33];
// -------------- tuples----------------------------------------------
// let data :[string , number , string , number] =['11' , 22 , '33' , 44]
// data.push(22)
// console.log(data);

// ------------------------ function--------------------------------------


// function sayhello(a: number , b:number):number | string
// {
//        return a+b;
// }
// console.log(sayhello(2,5))

// ---------------------- class-----------------------------------------------------
//  class hello{
//        a:number; b:boolean;
//        constructor(x:number , y:boolean){
//               this.a=x;
//               this.b=y;
//        }
//  }

// ----------------interface-----------------------------------------------
// interface person{
//        name :string,
//        gender ?:string;
//        email:string;
//        age ?:number;
// }

// let data: person = {
//        name:"jasmi mulani",
//        gender:"female",
//        email:"jasmi@gmail.com",
//        age:19,
// }

// //   ? optional values aaply is not complasory
// // let data1: person = {
// //        name:"jasmi mulani",
// //        email:"jasmi@gmail.com",
// // }
// // console.log(data1);

// console.log(data);

// --------------------------emuns----------------------------------------------\

// enum color{
//        red , yellow , green
// }
// let data :color =color.yellow
// // let data :color =color.blue
// console.log(data);

 



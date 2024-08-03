//  path module

const { log } = require("console");
const path = require("path")
const base = path.basename('D:\\xyz\\my.file.html');  // displat filename
console.log(base);

const dir = path.dirname('/foo/bar/baz/quux'); // directory name
console.log(dir);


const ext =path.extname('index.html')
console.log(ext);

const join = path.join('c:' , 'temp' , 'myfile.html')
console.log(join);


const fo = path.format({
    root: '/',
    name: 'file',
    ext: '.txt',
  });
  console.log(fo);

//   const abs =path.isAbsolute('/home/html/inde.html')
  const abs = path.isAbsolute('inde.html')
//   path.isAbsolute('//server');    // true
// path.isAbsolute('\\\\server');  // true
// path.isAbsolute('C:/foo/..');   // true
// path.isAbsolute('C:\\foo\\..'); // true
// path.isAbsolute('bar\\baz');    // false
// path.isAbsolute('bar/baz');     // false
// path.isAbsolute('.');           // false 
  console.log(abs);


  const normal=path.normalize('/react/html /css/index.css')
  console.log(normal);

  const par = path.parse('/react/home/html/index.html')
  console.log(par);

  const rel = path.relative('D://html/index.htm' ,'D://html/lecture-2.html')
  console.log(rel);
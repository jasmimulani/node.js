--  q-1 database create
 \ sql
 \ connect root@localhost:3306

 create database student_management;
use  student_management

-- q-2 create table
 create table students(
    student_id int(10)  primary key auto_increment,
    first_name varchar(10),
    last_name varchar(10),
    dob date,
    gender varchar(6),
    class_id int(10)
 );

  desc students;
   drop table students;
------------------- tabel-2
create table classes(
    class_id int(10) primary key auto_increment,
    class_name varchar(30),
    teacher_id int(10)
);
 desc classes;
  drop table classes;
 ---------- table -3
 create table teachers(
    teacher_id int (10) primary key auto_increment,
    first_name varchar(50),
    last_name varchar(50),
    subject varchar(50)
 );
  desc teachers;
   drop table teachers;
  
   ------------------------------------------------------------------
--    q-3
    insert into students
    values(1,'arjun' ,'kumar' , '2005-04-23', 'male',1);
    insert into students
    values(2 , 'priya','sharma','2006-06-15','female' , 1),
    (3 , 'rohan' , 'singh' , '2007-09-12' , 'male' ,2),
    (4,'anjali' , 'varma' , '2005-11-22','male' , 2),
    (5,'amit' , 'patel', '2008-02-03', 'male' , 1);

    select * from students
    -------------------------------------------------------
    insert into classes
    values(1 , 'mathematics' , 1),
    (2,'science' ,2),
    (3 , 'english',3),
    (4 , 'history' , 4),
    (5 , 'geography' ,5);
     select * from classes;
     -------------------------------------------------------
     insert into teachers
     values(1 , 'ravi','mehata','mathematics'),
     (2 , 'suman' , 'rao' , 'science'),
     (3, 'kavita' , 'desai', 'english'),
     (4 , 'rajesh' , 'joshi' , 'history'),
     (5 , 'sneha' , 'joshi' , 'geography');
      select * from teachers;
      -------------------------------------------------------------------------------------------------------------
    --   q-4
    --  1]
                    select * from students where class_id = 1;
    --    2]
                      select first_name , last_name from teachers;
     ----------------------------------------------------------------------------------------
    --  q-5
    create table enrollments(
           enrollment_id int (10)  primary key auto_increment,
           enrollment_date date,
            student_id int(10) references students (student_id)  ,
             teacher_id int (10) references teachers (teacher_id) 
    );

desc enrollments;

 drop  table enrollments;
 insert into enrollments
 values(1 , '2024-07-05' , 1 , 1);
  insert into enrollments
  values(2 , '2024-07-06' , 2 , 2),
  (3 , '2024-07-07' , 3 , 3),
  (4 , '2024-07-08' , 4 , 4),
  (5 , '2024-07-09' , 5 , 5);
   select * from enrollments;

   select s.first_name , s.last_name ,t.first_name , t.last_name ,e.enrollment_id , e.enrollment_date , e.student_id , e.teacher_id
   from students s
   left join enrollments e
    on s.student_id = e.student_id
    left join teachers t
   on t.teacher_id = e.teacher_id;
   -------------------------------------------------------------------------------------
--    q-6
--  1]
                update students   set last_name ='singh' where student_id =1;
-- 2]
                 update teachers set subject ='physics' where teacher_id =2
-----------------------------------------------------------
--  q-7
 
--  1]
                  select count(student_id) from students;

--  2]
                  select max(dob) from students;

-----------------------------------------------------------------------------------
-- q-8
-- 1]
            delete from students where student_id = 5;

-- 2]
            delete from enrollments where enrollment_id = 4;



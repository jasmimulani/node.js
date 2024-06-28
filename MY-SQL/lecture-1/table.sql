--\sql
-- \connect root@localhost:3306
-- show databases;

-- creacte database node5to7

--use node5to7;
-- show tables;


-- create new table:-

 -- create new table:-

 create table CLIENT_MASTER(
    CLIENTNo varchar(6),
    NAME varchar(20),
    ADDRESS1 varchar(30),
    ADDRESS2 varchar(30),
    CITY varchar(15),
    PINCODE int(8),
    STATE varchar(15),
    BALDUE int(10)
 );

 -- desc CLIENT_MASTER

 insert into CLIENT_MASTER
 values('C01' , 'jasmi' ,'33/A' , 'jakatnaka' , ' surat' ,395006 , 'gujarat',2000);
  insert into CLIENT_MASTER
  values('C02' , 'srushti','44/A' , 'punagaam' , ' surat' ,395005 , 'gujarat',3000),
  ('C03' , 'ashiti' ,'55/C' , 'amroli' , 'mumbai' ,395007 , 'gujarat',7000),
  ('C04' , 'vishva' ,'66/B' , 'amroli' , ' pune' ,395007 , 'gujarat',8000),
  ('C05' , 'krisha' ,'25/D' , 'nanavaracha' , ' maharashtra' ,395004 , 'gujarat',0);



--   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

--  PRODUCT_MASTER

  create table PRODUCT_MASTER(
    PRODUCTNO varchar(6),
    DESCRIPTION varchar(15),
    PROFITPERCENT int(10),
     UNITMEASURE varchar(10),
    QTYONHAND int(8),
    REORDERLVL int(8),
    SELLPRICE int(8),
    COSTPRICE int(8)
 );

 insert into PRODUCT_MASTER
 values('P001' , 'T-shirts' , 5 ,'piece' , 200 , 50 ,350 , 250),
       ('P002','shirts',6,'piece' , 150,50,500,350), 
       ('P003','denim shirts',6,'piece' , 150,20,100,250), 
       ('P004','lycra tpo',5,'piece' , 150,20,700,450), 
       ('P005','Trousers',2,'piece' , 150,40,450,350), 
       ('P006','cotton jeans',2,'piece' , 150,30,350,220), 
       ('P007','skirts',5,'piece' , 150,60,200,100); 


-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

-- creat  salesman_master


  create table SALESMAN_MASTER(
    SALESMANNO varchar(6),
    SALESMANNAME varchar(20),
    ADDRESS1 varchar(30),
    ADDRESS2 varchar(30),
    CITY varchar(15),
    PINCODE int(8),
    STATE varchar(15),
    SALAMT int(8),
    TGTTOGET int (6),
    YTDSALES int(6),
    REMARKS varchar(60)
 );



insert into SALESMAN_MASTER
 values('S0001' , 'janvi' ,'14/E' , 'worli' , 'mumbai' ,400002 , 'maharashtra',2000 , 100 , 50 , 'Good'),
 ('S0002' , 'rajvi' ,'65' , 'jakatnaka' , ' surat' ,395006 , 'gujarat',2000,200 , 100 , 'Good'),
('S0003' , 'khanak' ,'33/A' , 'juhu' , ' mumbai' ,400004, 'maharashtra',2000 , 200 , 150, 'Good'),
('S0004' , 'palak' ,'3/A' , 'puna' , 'surat' ,395004, 'gujarat',2000 , 100 , 150, 'Good');



-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

-- query
-- a
 select NAME from CLIENT_MASTER;

--  B
   select * from CLIENT_MASTER

  --  c
  select NAME,CITY,STATE from CLIENT_MASTER;

-- D
select DESCRIPTION from PRODUCT_MASTER;

-- E

select * from CLIENT_MASTER where CITY = 'mumbai';

-- f
select NAME from SALESMAN_MASTER where SALAMT=3000;

 update salesman_master set SALAMT = 3000 where SALESMANNO = 's0001';

--  4 (a)

update  CLIENT_MASTER set CITY='bangalore' where CLIENTNo ='c05';


-- B

  update CLIENT_MASTER set BALDUE=1000 where CLIENTNo='c01';

  -- C
   update PRODUCT_MASTER set COSTPRICE=950 where DESCRIPTION='trousers';

  --  D
   update salesman_master set CITY='pune';
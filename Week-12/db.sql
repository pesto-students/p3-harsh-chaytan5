DROP DATABASE IF EXISTS warehouse_pesto;
CREATE DATABASE warehouse_pesto;

USE warehouse_pesto;

CREATE TABLE cities(
	city CHAR(20) NOT NULL,
    state CHAR(20) NOT NULL,
    PRIMARY KEY(city)
);

INSERT INTO cities VALUES('Delhi', 'Delhi');
INSERT INTO cities VALUES('Surat', 'Gujarat');
INSERT INTO cities VALUES('Mumbai', 'Maharashtra');
INSERT INTO cities VALUES('Bengaluru', 'Karnataka');
INSERT INTO cities VALUES('Jammu', 'Jammu and Kashmir');
INSERT INTO cities VALUES('Indore', 'Madhya Pradesh');
INSERT INTO cities VALUES('Pune', 'Maharashtra');
INSERT INTO cities VALUES('Kolkata', 'West Bengal');
INSERT INTO cities VALUES('Ranchi', 'Jharkhand');
INSERT INTO cities VALUES('Goa', 'Goa');
INSERT INTO cities VALUES('Ludhiana', 'Punjab');

CREATE TABLE warehouses(
	wID INT AUTO_INCREMENT,
    wname CHAR(30) NOT NULL,
    location CHAR(20),
    extra_context JSON,
    PRIMARY KEY(wID),
    FOREIGN KEY(location) REFERENCES cities(city) ON DELETE SET NULL
);

INSERT INTO warehouses VALUES(1, 'Delhi North', 'Delhi', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Surat West', 'Surat', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Delhi East', 'Delhi', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Indore South', 'Indore', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Pune West', 'Pune', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Surat North', 'Surat', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Ranchi Central', 'Ranchi', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Goa Hub', 'Goa', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Kolkata West', 'Kolkata', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Pune East', 'Pune', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Mumbai South', 'Mumbai', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Jammu Main', 'Jammu', '{"info": "some extra info"}');
INSERT INTO warehouses VALUES(DEFAULT, 'Bengaluru Hosur', 'Bengaluru', '{"info": "some extra info"}');

CREATE TABLE stores(
	sID INT AUTO_INCREMENT,
    store_name CHAR(20),
    location_city CHAR(20),
    warehouse INT,
    PRIMARY KEY(sID),
    FOREIGN KEY(warehouse) REFERENCES warehouses(wID)
);

INSERT INTO stores VALUES(1, 'Raj Confectionery', 'Delhi', 1);
INSERT INTO stores VALUES(DEFAULT, 'Gupta stores', 'Pune', 5);
INSERT INTO stores VALUES(DEFAULT, 'Super store ', 'Surat', 6);
INSERT INTO stores VALUES(DEFAULT, '24x7 store', 'Bengaluru', 13);
INSERT INTO stores VALUES(DEFAULT, 'Aggarwal Sweets ', 'Ranchi', 7);
INSERT INTO stores VALUES(DEFAULT, 'All needs store ', 'Goa', 8);
INSERT INTO stores VALUES(DEFAULT, 'Krishna super store', 'Delhi', 1);

CREATE TABLE customer(
	cno INT AUTO_INCREMENT,
    cname CHAR(50),
    addr VARCHAR(50),
    cu_city CHAR(20),
    PRIMARY KEY(cno)
);

INSERT INTO customer VALUES(1, 'Raju sah', '989 North delhi', 'Delhi');
INSERT INTO customer VALUES(DEFAULT, 'Mr Patil', '1032 lavendar street pune', 'Pune');
INSERT INTO customer VALUES(DEFAULT, 'Ankit khurana', 'Pushpanjali enclave delhi', 'Delhi');
INSERT INTO customer VALUES(DEFAULT, 'Mr Arora', '007 park street goa', 'Goa');

CREATE TABLE orders(
	ono INT AUTO_INCREMENT,
    cno INT,
    item_no INT,
    ordered_quantity INT,
    odate DATE,
    PRIMARY KEY(ono),
    FOREIGN KEY(cno) REFERENCES customer(cno)
);

INSERT INTO orders VALUES(1, 1, 3, 10, '2022-05-21');
INSERT INTO orders VALUES(DEFAULT, 1, 2, 15, '2022-07-24');
INSERT INTO orders VALUES(DEFAULT, 1, 4, 5, '2022-08-02');
INSERT INTO orders VALUES(DEFAULT, 2, 1, 50, '2022-03-20');
INSERT INTO orders VALUES(DEFAULT, 2, 2, 7, '2022-06-12');
INSERT INTO orders VALUES(DEFAULT, 3, 3, 12, '2022-06-02');
INSERT INTO orders VALUES(DEFAULT, 4, 1, 14, '2022-05-05');

CREATE TABLE items(
	item_no INT,
    item_name VARCHAR(50),
    weight DECIMAL(5,2),
    cost DECIMAL(5,2),
    quantity INT,
    PRIMARY KEY(item_no)
);

INSERT INTO items VALUES(1, 'Foam Dinner Plate', 210.76, 499.99, 200);
INSERT INTO items VALUES(2, 'Lettuce - Romaine, Heart', 10.22 , 197.10, 150);
INSERT INTO items VALUES(3, 'Brocolinni - Gaylan, Chinese', 111.80, 99.50, 100);
INSERT INTO items VALUES(4, 'Sweet Pea Sprouts', 310.76, 359.99, 50);

ALTER TABLE orders
ADD FOREIGN KEY(item_no) REFERENCES items(item_no);










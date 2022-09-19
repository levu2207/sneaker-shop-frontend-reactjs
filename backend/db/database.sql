CREATE TABLE Permission (
  id int PRIMARY KEY AUTO_INCREMENT,
  permission varchar(20)
);

CREATE TABLE Users (
  id int PRIMARY KEY AUTO_INCREMENT,
  fullname varchar(50),
  email varchar(150),
  phone_number varchar(20),
  address varchar(200),
  password varchar(32),
  permission_id int,
  created_at datetime,
  updated_at datetime,
);

CREATE TABLE Category (
  id int PRIMARY KEY AUTO_INCREMENT,
  category varchar(100)
);

CREATE TABLE Products (
  id int PRIMARY KEY AUTO_INCREMENT,
  category_id int,
  product_name varchar(250),
  price int,
  sale int,
  size int,
  image1 varchar(500),
  image2 varchar(500),
  image3 varchar(500),
  image4 varchar(500),
  description longtext,
  created_at datetime,
  updated_at datetime,
);

CREATE TABLE Orders (
  id int PRIMARY KEY AUTO_INCREMENT,
  user_id int,
  fullname varchar(50),
  email varchar(150),
  phone_number varchar(20),
  address varchar(200),
  note varchar(1000),
  order_date datetime,
  status int,
  total_price int
);

CREATE TABLE Order_Details (
  id int PRIMARY KEY AUTO_INCREMENT,
  order_id int,
  product_id int,
  price int,
  num int,
  total_price int
);

CREATE TABLE Favorite (
  id int PRIMARY KEY AUTO_INCREMENT,
  user_id int,
  product_id int,
);

ALTER TABLE Users ADD FOREIGN KEY (permission_id) REFERENCES Permission (id);

ALTER TABLE Products ADD FOREIGN KEY (category_id) REFERENCES Category (id);

ALTER TABLE Order_Details ADD FOREIGN KEY (product_id) REFERENCES Products (id);

ALTER TABLE Order_Details ADD FOREIGN KEY (order_id) REFERENCES Orders (id);

ALTER TABLE Orders ADD FOREIGN KEY (user_id) REFERENCES Users (id);

ALTER TABLE Favorite ADD FOREIGN KEY (user_id) REFERENCES Users (id);

ALTER TABLE Favorite ADD FOREIGN KEY (product_id) REFERENCES Products (id);

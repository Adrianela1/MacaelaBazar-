-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema macaela
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema macaela
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS macaela DEFAULT CHARACTER SET utf8 ;
USE macaela ;

-- -----------------------------------------------------
-- Table macaela.Users
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS macaela.Users (
  User_id INT NOT NULL AUTO_INCREMENT,
  customer_full_name VARCHAR(50) NOT NULL,
  customer_password VARCHAR(100) NOT NULL,
  customer_email VARCHAR(50) NOT NULL,
  customer_age VARCHAR(50) NOT NULL,
  is_administrator TINYINT NULL,
  customer_bankaccount INT NULL,
  customer_description_page VARCHAR(100) NULL,
  customer_name_page VARCHAR(50) NULL,
  customer_banner VARCHAR(50) NULL,
  PRIMARY KEY (User_id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table macaela.Product
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS macaela.Product (
  Product_id INT NOT NULL AUTO_INCREMENT,
  Product_category VARCHAR(50) NOT NULL,
  Product_color VARCHAR(50) NOT NULL,
  Product_size VARCHAR(50) NOT NULL,
  Product_stock INT NOT NULL,
  Productc_price DOUBLE NOT NULL,
  Product_description VARCHAR(50) NOT NULL,
  Product_image VARCHAR(50) NOT NULL,
  Users_User_id INT NOT NULL,
  PRIMARY KEY (Product_id, Users_User_id),
  INDEX fk_Product_Users1_idx (Users_User_id ASC) VISIBLE,
  CONSTRAINT fk_Product_Users1
    FOREIGN KEY (Users_User_id)
    REFERENCES macaela.Users (User_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table macaela.Place_delivery
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS macaela.Place_delivery (
  place_delivery_id INT NOT NULL,
  date_delivery DATE NOT NULL,
  schedule_delivery VARCHAR(50) NOT NULL,
  time_delivery VARCHAR(50) NOT NULL,
  line_delivery VARCHAR(50) NOT NULL,
  station_delivery VARCHAR(50) NOT NULL,
  PRIMARY KEY (place_delivery_id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table macaela.pay
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS macaela.pay (
  pay_id INT NOT NULL AUTO_INCREMENT,
  due_date VARCHAR(50) NOT NULL,
  full_name VARCHAR(50) NOT NULL,
  bank_number VARCHAR(50) NOT NULL,
  cvv INT NOT NULL,
  PRIMARY KEY (pay_id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table macaela.Orders
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS macaela.Orders (
  order_id INT NOT NULL AUTO_INCREMENT,
  order_status TINYINT NOT NULL,
  amount DOUBLE NOT NULL,
  Users_User_id INT NOT NULL,
  Place_delivery_place_delivery_id INT NOT NULL,
  pay_pay_id INT NOT NULL,
  Product_Product_id INT NOT NULL,
  PRIMARY KEY (order_id, Users_User_id, Place_delivery_place_delivery_id, pay_pay_id, Product_Product_id),
  INDEX fk_Orders_Users_idx (Users_User_id ASC) VISIBLE,
  INDEX fk_Orders_Place_delivery1_idx (Place_delivery_place_delivery_id ASC) VISIBLE,
  INDEX fk_Orders_pay1_idx (pay_pay_id ASC) VISIBLE,
  INDEX fk_Orders_Product1_idx (Product_Product_id ASC) VISIBLE,
  CONSTRAINT fk_Orders_Users
    FOREIGN KEY (Users_User_id)
    REFERENCES macaela.Users (User_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Orders_Place_delivery1
    FOREIGN KEY (Place_delivery_place_delivery_id)
    REFERENCES macaela.Place_delivery (place_delivery_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Orders_pay1
    FOREIGN KEY (pay_pay_id)
    REFERENCES macaela.pay (pay_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Orders_Product1
    FOREIGN KEY (Product_Product_id)
    REFERENCES macaela.Product (Product_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table macaela.Order_status
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS macaela.Order_status (
  order_status_id INT NOT NULL AUTO_INCREMENT,
  Orders_order_id INT NOT NULL,
  Orders_Users_User_id INT NOT NULL,
  Orders_Place_delivery_place_delivery_id INT NOT NULL,
  Orders_pay_pay_id INT NOT NULL,
  Orders_Product_Product_id INT NOT NULL,
  PRIMARY KEY (order_status_id, Orders_order_id, Orders_Users_User_id, Orders_Place_delivery_place_delivery_id, Orders_pay_pay_id, Orders_Product_Product_id),
  INDEX fk_Order_tatus_Orders1_idx (Orders_order_id ASC, Orders_Users_User_id ASC, Orders_Place_delivery_place_delivery_id ASC, Orders_pay_pay_id ASC, Orders_Product_Product_id ASC) VISIBLE,
  CONSTRAINT fk_Order_tatus_Orders1
    FOREIGN KEY (Orders_order_id , Orders_Users_User_id , Orders_Place_delivery_place_delivery_id , Orders_pay_pay_id , Orders_Product_Product_id)
    REFERENCES macaela.Orders (order_id , Users_User_id , Place_delivery_place_delivery_id , pay_pay_id , Product_Product_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
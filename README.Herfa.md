# Herfa

An e-commerce application built using Node.js, Express.js, MongoDB, Socket.io



## Index

- [Demo](#Demo)
- [Overview](#Overview)
- [Software Requirements and User Stories](#Software-Requirements-and-User-Stories)
- [Wireframe, Domain Modeling and ERD](#Wireframe,-Domain-Modeling-and-ERD)
- [Features](#Features)
- [Installation](#Installation)
- [How it works](#How-it-works)
- [Manual Test](#Manual-Test)
- [Jest Test](#Jest-Test)
- [Postman Test](#Postman-Test)


## Demo

## Overview

In this website there are three types of user: Admin, Seller and Buyer. The Admin can manage the users and products, the Seller has a store connected to the seller id, and seller can add/update products of her/his own only, while the Buyer can add comments/ratings for products, view products categories and have a chat with the Seller.


## Software Requirements and User Stories

You can see the Requirements and User Stories of our application from [here](./requirements.md)


## Wireframe, Domain Modeling and ERD

You can see the Wireframe and Domain Modeling of our application from [here](./wireframe.md)


## Features

- Uses `Express` as the application Framework.
- Authenticates via username, password and email using `Bearer Authentication`.
- Passwords are hashed using `bcrypt` nodejs package.
- Social Authentication via Facebook and Google using `OAuth`
- Real-time communication between a client and a server using `Socket.io`.
- Uses `MongoDB` and `Mongoose` for storing and querying data.

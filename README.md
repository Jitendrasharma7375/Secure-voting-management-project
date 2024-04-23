# Secure Voting Management System

This project is a Secure Voting Management System built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a web interface for secure and efficient voting and administration.

## Features

- **Secure Login/Logout**: Admin and voter authentication.
- **Dashboard**: Real-time voting analytics.
- **Vote Management**: Admins can create, modify, and delete voting polls.
- **User Management**: Admins can manage voter accounts.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

__*Clone the repository to your local machine:*__

__git clone https://github.com/jitendrasharma7375/secure-voting-management-system.git__ <br>
__cd secure-voting-management-system__ <br>

__*Install the required npm packages:*__ <br>

__npm install__ 

__*Navigate to the client directory and install React dependencies:*__

__cd client__   
__npm install__

**Database Setup**

__*You need to manually add the Admin credentials to the MongoDB database. Use the following steps to set up your initial admin user.*__

__*1.Start MongoDB if it's not already running:*__ <br>
  __mongod__

__*2.Open another terminal and type:*__ <br>
  __mongo__

__*3.Use your database:*__ <br>
**use secure-voting-management-system**

__*4.Insert the admin credentials:*__ <br>
**db.admins.insert({ <br>
     adminId: "admin@gmail.com", <br>
     password: "12345", <br>
     role: "admin" <br>
 })** <br>
 
Make sure to change these credentials after the first login for security purposes.

## Running the Application**

__*Start the backend server:*__

 __cd ..  # If you are in the client directory__
 
 __npm start__

In another terminal, start the React client:

__cd client__

__npm start__

## Your app should now be running on http://localhost:3000.

## Usage
1.Open your browser and go to **http://localhost:3000.**

2.Log in using the admin credentials provided in the database setup:

__Username: admin@gmail.com__

__Password: 12345__

3.After logging in, change your password immediately for security purposes.

## Security

This application implements basic security features. However, when deploying publicly, consider the following enhancements:

- __Implement HTTPS.__
- __Use environment variables for sensitive data like database credentials and admin passwords.__
- __Consider more robust authentication mechanisms, such as OAuth or JWT with token refresh capabilities.__


## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## Developed By
- __*Jitendra Sharma*__
- __*Hitesh Natha*__
- __*Parul Sahu*__
- __*Mohit Yadav*__
- __*Stuti Rani*__








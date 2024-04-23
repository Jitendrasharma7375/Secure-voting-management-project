# Secure Voting Management System

This project is a Secure Voting Management System built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a web interface for secure and efficient voting and administration.

## Features

- **Secure Login/Logout**: Admin and voter authentication
- **Dashboard**: Real-time voting analytics
- **Vote Management**: Admins can create, modify, and delete voting polls
- **User Management**: Admins can manage voter accounts

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

Clone the repository to your local machine:

git clone https://github.com/jitendrasharma7375/secure-voting-management-system.git
cd secure-voting-management-system 

**Install the required npm packages:**
npm install

**Navigate to the client directory and install React dependencies:**
cd client
npm install

**Database Setup**
You need to manually add the Admin credentials to the MongoDB database. Use the following steps to set up your initial admin user.

1.Start MongoDB if it's not already running:
mongod
2.Open another terminal and type:
mongo
3.Use your database:

## use secure-voting-management-system

4.Insert the admin credentials:

**db.admins.insert({
  adminId: "admin@gmsil.com",
  password: "12345",
  role: "admin"
})**

Make sure to change these credentials after the first login for security purposes.

**Running the Application**

Start the backend server:

**cd ..  # If you are in the client directory
npm start**

In another terminal, start the React client:

**cd client
npm start**

## Your app should now be running on http://localhost:3000.
## Usage
1.Open your browser and go to **http://localhost:3000.**
2.Log in using the admin credentials provided in the database setup:

**Username: admin@gmail.com
Password: 12345**

3.After logging in, change your password immediately for security purposes.

## Security
This application implements basic security features. However, when deploying publicly, consider the following enhancements:

-**Implement HTTPS.**
-**Use environment variables for sensitive data like database credentials and admin passwords.**
-**Consider more robust authentication mechanisms, such as OAuth or JWT with token refresh capabilities.**


## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## Developed By
-**Jitendra Sharma**
-**Hitesh Natha**
-**Parul Sahu**
-**Mohit Yadav**
-**Stuti Rani**








# Secure User Authentication System (Task 1)

This project implements a secure user authentication system as part of Task 1 of the CODECRAFT_FS_01 internship.

## Features
- User Registration
- User Login
- Access to Protected Routes
- Password Hashing using bcryptjs
- JWT (JSON Web Token) Authentication

## Project Structure
CODECRAFT_FS_01/
├── backend/
│ ├── config/
│ │ └── db.js # Database configuration
│ ├── models/
│ │ └── User.js # User model
│ ├── routes/
│ │ ├── auth.js # Authentication routes
│ │ └── protected.js # Protected routes
│ ├── middleware/
│ │ └── auth.js # Authentication middleware
│ ├── .env # Environment variables
│ ├── .gitignore # Files to ignore in git
│ ├── package.json # Node.js package file
│ └── server.js # Main server file
└── frontend/
├── css/
│ └── style.css # CSS styles
├── js/
│ ├── auth.js # Authentication functions
│ └── ui.js # UI manipulation functions
├── index.html # Main HTML file
└── .gitignore # Files to ignore in git

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
2.Install dependencies
    npm install
3.Create a .env file in the backend directory with the following content:
  MONGO_URI=mongodb://localhost:27017/auth_system
  JWT_SECRET=your_jwt_secret_key
  PORT=5000
4.Start the server:
  npm run server
Frontend Setup
1.Navigate to the frontend directory:
  cd frontend
2.Install http-server globally (if not installed):
  npm install -g http-server
3.Start the frontend server:
  http-server

Usage
Open your browser and go to http://localhost:8080.
Register a new user by filling out the registration form.
After registration, you will be automatically logged in and redirected to the protected content.
You can log out and then log in again with your credentials.

Technologies Used
Backend: Node.js, Express.js, MongoDB, Mongoose, bcryptjs, JSON Web Tokens
Frontend: HTML, CSS, JavaScript
License
This project is licensed under the MIT License.

### Step 5: Preview Your README
1. Click the **"Preview"** tab above the editor to see how your README will look when rendered
2. Make any adjustments if needed

### Step 6: Commit the File
1. Scroll to the bottom of the page
2. In the "Commit new file" section:
   - The commit message should already be filled in as "Create README.md"
   - You can add an extended description if you want
   - Make sure "Commit directly to the `master` branch" is selected
3. Click the **"Commit new file"** button

### Step 7: Verify the README
1. After the page reloads, you should see your README content displayed on the repository page
2. The README.md file should also appear in your file list

## Advantages of Adding README Directly on GitHub

1. **No Command Line Needed**: You don't need to use Git commands
2. **Immediate Visibility**: The README appears right away on your repository page
3. **Easy Editing**: You can easily edit the README later by clicking the pencil icon
4. **Preview Feature**: You can see exactly how it will look before committing
5. **No Local Files Needed**: You don't need to create the file locally first

## How to Edit the README Later

If you want to make changes to your README later:

1. Go to your repository on GitHub
2. Click on the README.md file
3. Click the pencil icon (Edit this file)
4. Make your changes
5. Write a commit message
6. Click "Commit changes"

## What Happens to Your Local Repository

After adding the README directly on GitHub:

1. Your local repository is now behind the remote repository
2. To sync your local repository with GitHub, run these commands:
   ```bash
   git pull origin master

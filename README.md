Node Js Practical Exam
Task Management App Project Outline with JWT, Cookie, Role-Based Access, Multiuser Support, Populate, Navbar, and Minimalist Design (Within 50 points)



1.  Project Setup (5 points) 

   - Initialize a new Node.js project.

   - Install necessary dependencies: `express`, `ejs`, `body-parser`, `mongoose`, `jsonwebtoken`, `cookie-parser`, etc.

   - Set up a basic server using Express.



2.  Model - MongoDB Setup (5 points) 

   - Set up a MongoDB database to store task data.

   - Create collections for tasks, users, and categories.

   - Define Task, User, and Category models using Mongoose.



3.  Model - User Model with Roles (5 points) 

   - Enhance the User model to include fields such as `username`, `password`, `role`, etc.

   - Implement role-based access control (e.g., roles: `admin`, `user`).

   - Hash and store user passwords securely in the database.



    4.  Controller - Authentication (10 points) 

    - Create controllers for user registration (`/register`) and login (`/login`).

    - Implement a JWT token issuance upon successful login and send it as a cookie to the client.

    - Store user roles in the JWT payload.

    - Configure the server to use `cookie-parser` for parsing cookies.

    - Implement a route to handle user logout and clear the JWT token cookie.



5.  Middleware and Routing (10 points) 

   - Create middleware to check for the presence and validity of JWT tokens.

   - Implement middleware to extract user information from the token and attach it to the request object.

   - Use middleware to protect routes that require authentication.

   - Define routes for rendering views and handling CRUD operations on tasks and categories.

   - Ensure that routes are protected based on user roles.



6.  Model - Fetching and Displaying User-Specific Tasks (10 points) 

   - Update the User model to include a reference or array of associated tasks.

   - Ensure that all tasks can be retrieved for an authenticated user.

   - Modify routes to handle multiuser support.



7.  Model - CRUD Operations for Tasks (10 points) 

   - Implement controllers for adding, updating, and deleting tasks.

   - Ensure that regular users can only CRUD their own tasks.

   - Allow admins to CRUD tasks for any user.



8.  View Structure (5 points) 

   - Create the necessary views using EJS:

     - `taskList.ejs` (to display tasks)

     - `taskForm.ejs`

     - `taskItem.ejs`

     - `navbar.ejs` (for navigation)

     - `login.ejs`

     - `register.ejs`



9.  Navbar (5 points) 

   - Create a `navbar.ejs` partial for navigation.

   - Include links to the task list, task form, and a sign-out option (if applicable).

   - Customize the navbar based on user roles:

     - For users: Only show links to "My Tasks."

     - For admins: Show links to "My Tasks" and "All User Tasks."
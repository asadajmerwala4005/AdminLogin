Admin Login Project

This is a full-stack project with a React frontend (admin) and a Node/Express backend (backend) that demonstrates a simple admin login system with authentication.

Project structure:
adminlogin/ contains admin/ for the frontend and backend/ for the backend, along with .gitignore and README.md.

Setup instructions:

Clone the repository using git clone https://github.com/YOUR_USERNAME/adminlogin.git and move into the folder with cd adminlogin.

For the backend, go into the backend folder with cd backend and install dependencies using npm install.

Create a .env file inside the backend folder with the following content: PORT=5000, DB_URL=your_database_url, JWT_SECRET=your_secret_key.

Start the backend server using npm start. It will run on http://localhost:5000.

For the frontend, go into the admin folder with cd ../admin, install dependencies with npm install, and start the frontend server using npm start. It will run on http://localhost:3000.

Open your browser at http://localhost:3000 to access the admin login page. Use the login form to authenticate with the backend.

Important notes:

Do not commit the .env file to GitHub as it contains sensitive credentials. .env and node_modules/ are ignored using .gitignore.

If .env was ever pushed, change your database password, JWT secret, or API keys immediately.

This setup assumes Node.js and npm are installed and that MongoDB is accessible if used as the database.

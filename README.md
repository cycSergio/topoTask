# TOPO Technical Assessment  
This is a **React + Express** local application that supports data visualization, filtering, and display.  

## 1. Tech Stack  
- **Frontend**: React + Vite
- **Backend**: Express + Node.js  

## 2. Setup Instructions
### 2.1 Run with Docker
To run the backend using Docker:
```sh  
cd backend && docker build -t my-backend . && docker run -p 3000:3000 my-backend 
```
To run the frontend using Docker:
```sh
cd frontend && docker build -t my-frontend . && docker run -p 5000:5000 my-frontend  
```
To run both services together using Docker Compose:
```sh
docker-compose up --build  
```
Then visit http://localhost:5000 for the frontend and http://localhost:3000/api/data for the backend API.

Ensure your data/ directory contains the required dataset files. If running in a Docker container, verify file paths for proper access. The frontend is served using nginx in the Docker container.

### 2.2 Local Setup  
First, install dependencies:  
```sh  
cd backend && npm install  
cd ../frontend && npm install
```
Then, start the backend:
```sh  
cd backend && npm start 
```
The backend API will be available at http://localhost:3000/api/data.
Next, start the frontend:
```sh  
cd frontend && npm run dev  
```
The frontend will be available at http://localhost:5000.

## 3. Challenges
Issue reading PPTX files, not resolved due to time constraints.

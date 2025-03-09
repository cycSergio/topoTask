# TOPO Technical Assessment  
This is a **React + Express** local application that supports data visualization, filtering, and display.  

## 1. Tech Stack  
- **Frontend**: React + Vite
- **Backend**: Express + Node.js  

## 2. Setup Instructions

### 2.1 Local Setup  
First, install dependencies: 
Run the following commands in the project directory:  
```sh  
cd backend && npm install  
cd ../frontend && npm install
```
Then, start the backend:
```sh  
cd backend && npm start 
```
The backend API will be available at http://localhost:3000/api/data.
If port 3000 is occupied, try using another port: 
```sh
PORT=3001 npm start
```

Next, start the frontend:
```sh  
cd frontend && npm run dev  
```
The frontend will be available at http://localhost:5000. 
If port 5000 is occupied, try using another port.

## 3. Challenges
Issue reading PPTX files, not resolved due to time constraints.

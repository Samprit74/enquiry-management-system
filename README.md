# 🚀 Enquiry Management System

[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react)](https://reactjs.org/) 
[![Node.js](https://img.shields.io/badge/Node.js-18.16.0-green?logo=node.js)](https://nodejs.org/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0.7-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A **modern web-based Enquiry Management System** built with React, Node.js, Express, and MongoDB.  
Manage enquiries, view charts, and enjoy smooth animations with professional UI.

---

## ✨ Features

- Responsive **React frontend** with Flowbite components  
- **CRUD operations**: Create, Read, Update, Delete enquiries  
- Animated **splash screen** with smooth page transitions  
- **Interactive charts** for data visualization  
- Notifications using **SweetAlert2** and **React-Toastify**  
- Professional gradient theme and responsive design  

---

## 🛠 Tech Stack

| Frontend  | Backend       | Database    | Charts      | Notifications         |
|-----------|---------------|------------|------------|----------------------|
| React     | Node.js        | MongoDB    | Recharts    | SweetAlert2, Toastify |
| Tailwind  | Express.js     |            |            |                      |
| Flowbite  |               |            |            |                      |

---

## 📁 Project Structure

todo+2/
├─ client/ # React frontend
│ ├─ src/
│ │ ├─ App.jsx
│ │ ├─ Enquery.jsx
│ │ ├─ EnqueryTable.jsx
│ │ ├─ animation/
│ │ ├─ splash/
│ │ └─ App.css
│ └─ package.json
├─ server/ # Node.js backend
│ ├─ Controllers/
│ ├─ Routes/
│ ├─ Models/
│ └─ package.json
└─ .gitignore


---

## ⚡ Installation

### Backend
```bash
cd todo+2/server
npm install


Create a .env file:

PORT=8000
MONGODB_URI=your_mongodb_connection_string


Start the backend server:

npm run dev

Frontend
cd todo+2/client
npm install
npm run dev


Open in browser:

http://localhost:5173/



Usage

Fill the enquiry form

View, edit, or delete enquiries

Watch live data visualization in charts

Enjoy smooth animations and professional theme

Future Improvements

Add user authentication with JWT

Email notifications for new enquiries

Deploy frontend and backend for production

Advanced 3D or WebGL animations for splash screen


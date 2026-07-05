# Multi-Page React Application with Routing

A beginner-friendly React app demonstrating multi-page navigation using **React Router DOM**.

## Features
- Home, About, Users, and User Detail pages
- Persistent Navbar with active-route highlighting (`NavLink`)
- Dynamic routes with `useParams()`
- Programmatic navigation with `useNavigate()`
- Clean, responsive, plain-CSS styling

## Project Structure
```
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Users.jsx
│   └── UserDetail.jsx
├── data/
│   └── users.js
├── App.jsx
├── main.jsx
└── index.css
```

## Setup & Run

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production
```bash
npm run build
npm run preview
```

## Routes
| Path         | Page             |
|--------------|------------------|
| `/`          | Home             |
| `/about`     | About            |
| `/users`     | Users list       |
| `/users/:id` | User detail page |

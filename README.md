# Fogo

Fogo is a full-stack web application with a React frontend, Node.js/Express backend, and MongoDB database. It includes secure authentication, user-generated listings, and bidding functionality, designed for a clean, responsive interface.

## Video Demo

[no demo yet wip]

## Features

### Frontend Features
- React SPA with `react-router-dom` routing
- Global state management for `username` and login status
- Pages & Components:  
  - HomePage / CreateListingPage / LoginPage / RegisterPage  
  - NavBar, LoginForm, RegisterForm, CreateListingForm, AllListings  
- Hooks & Services:  
  - CSRF token handling, authentication, listing creation, and fetching  
- Responsive UI: Flexbox-based layout, centered forms, consistent listing cards with fallback images  
- Planned features: Single listing page with bidding, user profile page, pagination, input validation  

### Backend Features
- Node.js / Express server with middleware: JSON parsing, cookies, CORS, CSRF protection
- MongoDB via Mongoose with centralized connection management
- Secure authentication:
  - JWT-based login/logout with refresh tokens
  - Password hashing and verification with bcrypt
  - Protected routes with JWT middleware
- Listings and bids:
  - Users can create and fetch listings
  - Listings linked to users
  - Track highest bid per listing
- CSRF token endpoint for frontend requests
- Error handling and modular structure  




## Roadmap
- [ ] Add pagination for listings (frontend/backend)
- [ ] Implement Helmet for enhanced HTTP headers/security
- [ ] Use semantic HTML tags for better accessibility and SEO
- [ ] Ensure JWT tokens are cleared on login/logout
- [ ] Implement lazy loading for images and heavy components
- [ ] Add rate limiting to prevent brute-force or abuse attacks
- [ ] Integrate Joi schema-level validation for robust input validation

## Tech Stack
- **Frontend:** React, JavaScript, CSS, react-router-dom  
- **Backend:** Node.js, Express, Mongoose, JWT, bcrypt  
- **Database:** MongoDB  
- **Security:** CSRF tokens, HTTP-only cookies, JWT authentication, refresh token rotation, password hashing  
- **Architecture:** Component-based SPA (frontend) + MVC-style backend  CSRF protection
- **Architecture:** MVC-style (controllers, models, middleware, routes, utils)

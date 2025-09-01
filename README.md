# Product Management App

A comprehensive product management application built with React, Redux, and Bootstrap. This application provides full CRUD operations for managing products with authentication, search, filtering, and sorting capabilities.

## Features

### 🔐 Authentication
- Simple login system with demo credentials
- Protected routes for authenticated users
- Session persistence using localStorage

### 📦 Product Management
- **Add Products**: Create new products with title, price, image, category, and description
- **View Products**: Display all products in a responsive card layout
- **Edit Products**: Inline editing of existing products
- **Delete Products**: Remove products with confirmation dialog

### 🔍 Search & Filter
- **Search**: Search products by title
- **Filter**: Filter products by category (Electronics, Fashion, Home, Sports, Books)
- **Sort**: Sort products by name or price (low to high, high to low)

### 🎨 UI/UX
- Modern Bootstrap 5 styling
- Responsive design for all screen sizes
- Loading states and error handling
- Intuitive navigation with navbar

## Tech Stack

- **Frontend**: React 19, Redux, React Router DOM
- **Styling**: Bootstrap 5
- **Backend**: JSON Server
- **HTTP Client**: Axios
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd product-management-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the JSON Server (in one terminal):
```bash
npm run server
```

4. Start the development server (in another terminal):
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Demo Credentials
- **Username**: `admin`
- **Password**: `password`

### Redux Store
- Centralized state management for products and authentication
- Async actions using Redux Thunk
- Proper error handling and loading states

### Component Architecture
- Reusable components with proper prop handling
- Separation of concerns between UI and business logic
- Responsive design with Bootstrap components

### Authentication Flow
- Login form with validation
- Protected routes using PrivateRoute component
- Session persistence and automatic login check

### Product Operations
- Form validation for required fields
- Image URL validation
- Price validation (numeric, positive values)
- Confirmation dialogs for destructive actions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.# ReactJs_Final_Exam

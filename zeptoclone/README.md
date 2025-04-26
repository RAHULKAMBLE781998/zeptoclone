# Zepto Clone

A React-based instant grocery delivery application clone.

## Features

- User-friendly interface for browsing products
- Category-based product organization
- Shopping cart functionality
- Order tracking
- Responsive design for mobile and desktop

## Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend: Express.js (Mock API)
- State Management: React Context API
- Icons: Lucide React

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/zepto-clone.git
cd zepto-clone
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install server dependencies:
```bash
cd server
npm install
```

### Running the Application

1. Start the mock API server:
```bash
cd server
npm run dev
```

2. In a new terminal, start the React development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
zepto-clone/
├── public/
│   └── images/
├── src/
│   ├── api/
│   │   └── index.js
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home/
│   │   ├── Cart/
│   │   └── ...
│   └── App.jsx
└── server/
    └── server.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

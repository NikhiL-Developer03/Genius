# Genius School Website

A modern educational institution website built with Node.js, Express, and Handlebars templating engine.

## Features

- Responsive school website design
- Modern UI with gradient backgrounds
- Express.js backend with routing
- Handlebars templating
- Professional educational theme

## Technologies Used

- **Backend**: Node.js, Express.js
- **Templating**: Handlebars (HBS)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Bootstrap, Custom CSS

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd genius
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   or
   ```bash
   node index.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Project Structure

```
genius/
├── controllers/          # Route controllers
│   ├── front.js         # Frontend route handlers
│   └── admin/           # Admin controllers (for school administration)
├── routes/              # Express routes
│   ├── index.js         # Main router
│   ├── front.js         # Frontend routes
│   └── admin/           # Admin routes
├── views/               # Handlebars templates
│   ├── index.hbs        # Home page template
│   ├── aboutPage.hbs    # About school page template
│   ├── partials/        # Reusable template components
│   └── public/          # Static assets (CSS, JS, Images)
│       └── assets/      # School assets and resources
├── models/              # Database models (students, courses, etc.)
├── middlewares/         # Custom middleware
├── helpers/             # Helper functions
├── package.json         # Project dependencies
└── index.js            # Main application file
```

## Available Routes

- `/` - School home page
- Add more routes as you develop them (courses, admissions, faculty, etc.)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/genius-school-website](https://github.com/yourusername/genius-school-website)

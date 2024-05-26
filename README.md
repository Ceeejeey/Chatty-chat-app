# Chatty

Chatty is a web-based chat application designed for secure and user-friendly communication. Built with Node.js, Express, MySQL, and various other modern web technologies, Chatty offers a robust platform for real-time messaging.

## Features

- **Secure Authentication:** Chatty employs JSON Web Tokens (JWT) for secure user sessions and bcrypt.js for password hashing, ensuring that user data remains protected.
- **Email Verification:** To ensure user authenticity, Chatty utilizes email verification through Nodemailer and the Google API, adding an extra layer of security.
- **Responsive Design:** With Bootstrap, Chatty offers a responsive and visually appealing user interface, ensuring an optimal experience across devices.
- **Dynamic Templating:** The application utilizes EJS for dynamic content rendering, providing a seamless user experience.
- **Password Strength Meter:** Chatty enforces strong passwords during signup, enhancing security and protecting user accounts.
- **Unique Email Enforcement:** Chatty prevents duplicate account creation by validating unique email addresses during signup.

## Technologies Used

- **Backend:** Node.js, Express
- **Database:** MySQL
- **Authentication:** JSON Web Tokens (JWT), bcrypt.js
- **Frontend:** Bootstrap, EJS
- **Email Services:** Nodemailer, Google API

## Getting Started

To get a local copy of the project up and running, follow these simple steps:

### Prerequisites

- Node.js installed on your machine
- MySQL database setup

### Installation

1. Clone the repository:
git clone https://github.com/Ceeejeey/Chatty-chat-app.git
2. Navigate to the project directory:
cd chatty
3. Install dependencies:
npm install
    "bcryptjs": "^2.4.3",
    "bootstrap": "^5.3.3",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.4.5",
    "ejs": "^3.1.9",
    "express": "^4.18.3",
    "express-session": "^1.18.0",
    "googleapis": "^134.0.0",
    "jsonwebtoken": "^9.0.2",
    "mysql": "^2.18.1",
    "nodemailer": "^6.9.13",
    "passport": "^0.7.0",
    "passport-google-oauth20": "^2.0.0",
    "randomstring": "^1.3.0"
   
4. Set up your MySQL database and update the `.env` file with your database credentials and other configuration details.

5. Start the server:
   nodemon

6. Open your web browser and visit `http://localhost:5000` to access Chatty.

   ## Contributing

Contributions to Chatty are welcome and encouraged! If you would like to contribute to the project, please follow these steps:

1. Fork the project repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push your branch to your fork (`git push origin feature/AmazingFeature`).
5. Open a pull request on the main repository.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Email - gihanvimukthi19@gmail.com
LinkedIn - www.linkedin.com/in/gihan-vimukthi

Project Link: [(https://github.com/Ceeejeey/Chatty-chat-app.git)](https://github.com/Ceeejeey/Chatty-chat-app.git)


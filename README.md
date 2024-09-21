# AI Chatbot ReactJS Application

## Overview

This project is a ReactJS application designed to create a web-based AI chatbot interface. The application features a secure login page, a dynamic chat input box, and is optimized for responsiveness and accessibility. The user interface is based on the visual guide provided and includes essential functionalities for a chatbot interaction.

## Features

1. **Login Page**
   - A secure login page with client-side validation.
   - Hardcoded credentials for authentication:
     - Username: `user123`
     - Password: `pass123`

2. **Dynamic Placeholder in Chat Input Text Box**
   - The placeholder in the chat input text box changes based on the selected department from the dropdown menu.
   - When “Sales” is selected, the placeholder updates to: `“Enter your sales query here...”`
   - When “Marketing” is selected, the placeholder updates to: `“Enter your marketing query here...”`

3. **Enhanced User Experience**
   - Responsive design to ensure compatibility with various devices and screen sizes.
   - Accessible interface for improved user interaction.

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/ai-chatbot-react-app.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd ai-chatbot-react-app
   ```

3. **Install Dependencies**

   Ensure you have Node.js and npm installed. Install the project dependencies by running:

   ```bash
   npm install
   ```

4. **Run the Application**

   Start the development server with:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## Usage

1. **Login**

   - Open the application in your browser.
   - Enter the hardcoded credentials:
     - Username: `user123`
     - Password: `pass123`
   - Click the login button to access the chatbot screen.

2. **Chatbot Interaction**

   - Select a department from the dropdown menu (e.g., “Sales” or “Marketing”).
   - Observe the dynamic change in the chat input text box placeholder based on the selected department.
   - Type your query in the chat input text box and interact with the chatbot.

## Development

### Project Structure

- `src/` - Contains the React components and application logic.
  - `components/` - React components for different parts of the application.
    - `LoginPage.js` - The login page component.
    - `ChatbotScreen.js` - The main chatbot interface component.
  - `App.js` - The main application file that manages routing and state.
  - `index.js` - The entry point of the React application.
- `public/` - Contains static assets such as the `index.html` file.
- `package.json` - Project metadata and dependencies.

### Technologies Used

- ReactJS
- Tailwind CSS for styling
- Client-side validation with JavaScript

### Tailwind CSS Integration

- Tailwind CSS is used for styling the application, providing a utility-first CSS framework for rapid UI development.
- Ensure Tailwind CSS is properly configured in your project for consistent styling.

## Accessibility and Responsiveness

- The application is designed to be responsive, adapting to various screen sizes and devices.
- Accessibility considerations are implemented to ensure a user-friendly experience.

## Troubleshooting

- **Problem:** Unable to start the application.
  - **Solution:** Ensure you have Node.js and npm installed. Run `npm install` to install dependencies before starting the server.

- **Problem:** Login credentials not working.
  - **Solution:** Verify the credentials are correctly entered:
    - Username: `user123`
    - Password: `pass123`

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. Please ensure your contributions align with the project’s objectives and follow the coding standards.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

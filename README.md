# PWA Text Editor

## Description

This is a Progressive Web Application (PWA) Text Editor that allows users to create notes or code snippets with or without an internet connection. The application features data persistence techniques for redundancy and works offline. Users can install it on their devices as a native application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To install and run this application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone
    ```

2. Install dependencies:
    ```bash
    npm install
    cd client
    npm install
    ```

3. Build the client:
    ```bash
    npm run build
    cd ..
    ```

4. Start the server:
    ```bash
    npm run start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Start typing in the text editor. The content will be saved automatically to IndexedDB when the editor loses focus.
3. You can use the text editor offline by disconnecting your internet connection.
4. Click the install button to install the PWA on your device.

## Screenshots

![Text Editor Screenshot](assets\images\challenge19.png)

## Features

- Online and offline functionality
- IndexedDB for data persistence
- PWA installable
- Service worker for caching and offline access

## Technologies

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Webpack
- Babel
- Workbox
- IndexedDB
- PWA

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Questions

If you have any questions or need further assistance, please feel free to contact me:

- GitHub: [BrandonDunlap](https://github.com/BrandonDunlap)
- Email: dunlapbrandon24@gmail.com

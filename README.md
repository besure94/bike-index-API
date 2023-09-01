# Bike Index

#### Search for a list of reported stolen bikes in your city.

#### By Brian Scherner

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* Webpack
* Node Package Manager

## Description

This application allows users to search for reported stolen bikes in their city. Users can enter the name of a city, and view a list of stolen bikes in that location. Each listing features the bikes title, serial number, description, a URL to the listing on bikeindex.org, and a picture, if one is available.

## Setup/Installation Requirements

* Select the green "Code" button and clone the repository to your desktop.
* Navigate to the repository and open it in VS Code.
* In the terminal, go to the root directory and run the command `$ npm install` to install node_modules.
* Run the command `$ npm run build` to bundle together JS files.
* Enter the command `$ npm run start` to start a live development server.
* Enter the command `$ npm run lint` to check for errors.

## Known Bugs

* The bikeindex.org API is not as functional as desired. Many listings fail to list essential information about each bike, and it often returns bike listings that are not in the city that the user entered.

## License

MIT

Copyright(c) 2023 Brian Scherner
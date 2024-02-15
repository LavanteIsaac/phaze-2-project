# phaze-2-project

## Getting Started

To run this project locally, follow these steps:

1. Open a terminal and navigate to the project directory:
    ```
    cd build-a-burger
    ```

2. Start the server by running the following command:
    ```
    npm run server
    ```

3. Open a new terminal and navigate to the project directory:
    ```
    cd build-a-burger
    ```

4. Start the development server by running:
    ```
    npm start
    ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Functionality

This single page application uses React.js to create 3 client side routes for users to naviagte using links on the page. 
There are 8 componenents within the project that allow the user to build the burger that dreams are made of and post a selfie of 
them with their burger. We use a json server as a restful API to store basic data including that which is submitted by users, 
via a POST method request. 

### Landing Page http://localhost:3000/

- The landing page serves as the entry point to the application.
- It includes navigation links to other pages within the app.
- Users are greeted and introduced to the Build-A-Burger Selfie Submission App.

### Build-A-Burger Page http://localhost:3000/App

- This page allows users to create and customize virtual burgers.
- Users can select from a variety of ingredients and fixins to build their ideal burger.
- The interface provides interactive elements for visualizing and modifying the burger.

### Selfie Submission Page http://localhost:3000/NewInsta

- Users can submit selfies featuring themselves and their burgers on this page.
- The submission form collects user information, including name, age, pronouns, and Instagram handle, along with the selfie.
- Submitted content is sent to the server for processing and storage.

## Technologies Used

- React.js
- React Router
- HTML5
- CSS3
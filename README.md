# JWT-PASSPORT MERN AUTH

> A Full-Stack app with user Login/Signup functionality deployed on [Heroku](https://jwt-mern-auth.herokuapp.com/ "Heroku").
It uses JSON Web Token (JWT) for User Authorization and information exchange and Passport.js as authentication MiddleWare.
Further, it implements Redux for Global State Management.

## Features
- [x] New users can register using their Email and Password.
- [x] Successfully registered users can Login to access Dashboard.
- [x] Users stay logged in even after closing the app or refreshing the page.
- [x] Token expiry to Logout user after stipulated time.

## Functioning
- User visits the application and receives a Welcome Page

- - New users click on the Register button to create account
- - - Validation checks are performed on the form data entered by the user.
- - - User is redirected to the Dashboard after successful Registration.

- - Existing users click on the Login button.
- - - Enter the details used at the time of Registration.
- - - User is redirected to the Dashboard if the details match.

- - Token expires after stipulated time and the user is redirected back to Login page.

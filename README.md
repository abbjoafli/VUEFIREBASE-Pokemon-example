# Vuex Firestore Pokemon Starter Example
## Demo
[Pokemon demo!](https://pokemonexempel.web.app/login)

Kommer lägga upp mer text senare!
## Project setup
```
npm install
```
### Firebase setup
```
Copy/Paste Your Own Firebase API Keys to src/firebase.js
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Theme customisation
```
src/plugins/vuetify.js
```
### Vuetify theme generator
[https://vuetifyjs.com/en/theme-generator](https://vuetifyjs.com/en/theme-generator)


#### 

To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

Run the following npm command to install the CLI or update to the latest CLI version.


npm install -g firebase-tools
Doesn't work? Take a look at the Firebase CLI reference or change your npm permissions

Deploy to Firebase Hosting
You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

Sign in to Google

firebase login
Initiate your project
Run this command from your app’s root directory:


firebase init
Specify your site in firebase.json
Add your site name to the firebase.json configuration file. After you get set up, see the best practices for multi-site deployment.


{
  "hosting": {
    "site": "pokemonexempel",
    "public": "public",
    ...
  }
}
When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:


firebase deploy --only hosting:pokemon
After deploying, view your app at pokemon.web.app

Need help? Check out the Hosting docs


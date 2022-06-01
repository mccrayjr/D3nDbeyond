# [Deployed V1](http://freendbeyond.herokuapp.com/)

Hello! I'm glad you're here. I'm working on this enounter tracker to hopefully make my/other's DM/s lives a little easier.
I only really work on this thing for fun in my free time, so no eta on when it'll be "done" but below are the things that I'm hoping for.
You're welcome to make a pull request if you want to join in!

Note: I'm currently using this repo to try making this thing distributed via AWS & docker. I definitely could have just made a branch on the other one and I might go back and do it later, but for now here's this repo.

### Refactoring/ToDo list:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xRemove dummy data

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xAdd Delete feature

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xChange to using class objects for characters and monsters (methods for changing status/health/initiative)

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xRefactor reducer to deeply clone objects

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xHook up to [API](https://www.dnd5eapi.co/) for monsters

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xCreate Modal(s) for status/health [stats icons](https://drive.google.com/drive/folders/1p8PTqBHkgSrKVqqOyI2_kFcPmbgLcX72)

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Bugs: 1.) Error Handling for monster data 2.) Turns for 1 character 3.) Populate status modal w/ correct info

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Quick look up for spells via api + modal

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Add Reset Feature to change all remaining characters initiative (new Encounter Modal)

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Styling for header/Background/Footer

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-DnD music Integration(?) tbd



&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Integrate Dice Roller




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### `docker-compose -f /docker/docker-compose.dev.yml up`
runs the docker stuff
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

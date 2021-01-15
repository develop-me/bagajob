# Bagajob App
Job Hunting Management App built by Develop Me students for Develop Me students.

## Code of Conduct

Available here: https://github.com/develop-me/bagajob/wiki/A-Code-of-Conduct-for-Open-Source-Projects

## Front-end Architecture - React Redux

### Collaborating:

**Never commit directly to the master branch. Create a new feature branch - (NOW INITIALISED) from the development branch, and make a pull request for a team-mate to review and merge.**

### Getting Started:

1. Clone the repository to your local machine using the URL in the Repo
```bash
git clone {url} {foldername}
```
2. Install neccessary packages using npm
```bash
npm install
```
3. Find a new issue in this repository to work on

4. Create a branch on your local machine to work on that issue/feature
```bash
git checkout -b {name of branch}
```
5. Develop your features in your feature branch, and test on your local machine

6. Once you're happy with your branch push your branch to the remote repo on gitHub
```bash
git push origin {branch}
```
7. In gitHub create a pull request for your new branch to merge into the **development** branch, assign a reviewer and link the issue you were working on

8. Have a team member review the pull request and merge!

9. Ensure the branch is deleted once its merged

## Running and using the App locally

1. Run `npm start`

1. Visit the local development server in your browser

## Developing Styling

This application is styled using SASS. All `.scss` files (`src/scss/example/_example.scss`) are imported (`@import`) into `src/scss/main.scss`, before being compiled to `src/css/styles.min.css`.

In order to compile SASS to CSS, run the following command in the project root:

`sass src/scss/main.scss src/css/styles.min.css`

In order to configure SASS to compile every time changes are saved to a SASS file, run:

`sass --watch src/scss/main.scss src/css/styles.min.css`

Please note that changes to SASS files will not show in the app until compiled to `src/css/styles.min.css`.

## API Set Up
- To test the front end fully you'll need to set up a local instance of the API on a VM. Follow the instructions on this gitHub repo to install:
  - (https://github.com/develop-me/bagajob-api)
  
## Deployment
- The front end is a static site deployed to developme's servers. The site is hosted at https://bagajob.developme.space/ 
- Once someone has granted you access (by adding your ssh key to the server) you can access the server by running `ssh ubuntu@134.122.103.160` at your command prompt

### Current Steps
(These could definitely be optimized)
- Merge any PRs to the master branch
- Make sure you have the latest master branch on your machine
- Run `npm run build` to build the production files in the `build` directory
- Commit any changes to master branch, alternatively you can run `npm run build` before merging in any PRs to master... ensure they are pushed to gitHub.
- SSH into the server `ssh ubuntu@134.122.103.160`
- move to the repo directory `cd /var/www/bagajob`
- Pull the new changes from git `git pull`
- NGINX (the web server) is set up to serve the production files from `/var/www/bagajob/build/`
- You may need to reload the web server if you don't see your changes `sudo nginx -s reload`

NOTE: Currently the `development` branch is active on the host, you'll want to change this to `master` eventually `git checkout master` which ssh'd into the server
--

# Create React App Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# ELEN4010-lab4 - Software Development III 
### Walkthrough for creating a Continuous Deployment (CD) pipeline for a Nodejs app service through Azure Web Services
[![Build Status](https://travis-ci.com/JaredP94/ELEN4010-Lab4.svg?branch=master)](https://travis-ci.com/JaredP94/ELEN4010-Lab4)

Site can be accessed at [lab4app.azurewebsites.net](https://lab4app.azurewebsites.net/todo)

## Setup Process

### Part 1: Creating Test Pipeline
* Run `npm install --save-dev mocha chai` to install the *Mocha* testing framework and *Chai* assertion library
* Create a *test* folder
* Create a test file (e.g todoList.js)
* Write some tests in the file that are expected to pass
* Within *package.json*, add `"test": "mocha"` under the *scripts* property
* Run your tests with `npm test`

### Part 2: Creating Web App Service through Azure Portal
* Login to the [Azure web services portal](https://portal.azure.com/) (you can sign up for a free trial if needed)
* Navigate to *App Services*
* Select *Add*
* Select *Web App*
* Select *Create*
* Provide a name for the app service
* Select/Create the resource group for the app service
* Change *OS* to *Linux*
* Chance the *Runtime Stack* to *Node.js 9.4*
* Select *Create*

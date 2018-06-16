# ELEN4010-lab4 - Software Development III 
### Walkthrough for creating a Continuous Deployment (CD) pipeline for a Nodejs app service through Azure Web Services
[![Build Status](https://travis-ci.com/JaredP94/ELEN4010-Lab4.svg?branch=master)](https://travis-ci.com/JaredP94/ELEN4010-Lab4)

Site can be accessed at [lab4app.azurewebsites.net](https://lab4app.azurewebsites.net/todo)

## Setup Process

### Part 1: Creating Test Pipeline
* Run `npm install --save-dev mocha chai` to install the *Mocha* testing framework and *Chai* assertion library
* Create a **test** folder
* Create a test file (e.g todoList.js)
* Write some tests in the file that are expected to pass
* Within **package.json**, add `"test": "mocha"` under the **scripts** property
* Run your tests with `npm test`

### Part 2: Using Travis CI to setup a Continuous Integration Pipeline
* Login to [Travis CI](https://travis-ci.org/) (create an account if needed)
* Add your targeted repository
* Create a **.travis.yml** file in the root of your repository
* Enter the following:

  `language: node_js`

  `node_js:`

  `  - "6"`
  
* This will trigger a build on Travis - wait for the build to complete and ensure your tests have passed

### Part 3: Creating Web App Service through Azure Portal
* Login to the [Azure web services portal](https://portal.azure.com/) (you can sign up for a free trial if needed)
* Navigate to **App Services**
* Select **Add**
* Select **Web App**
* Select **Create**
* Provide a name for the app service
* Select/Create the resource group for the app service
* Change **OS** to **Linux**
* Chance the **Runtime Stack** to **Node.js 9.4**
* Select **Create**

### Part 4: Automating Deployment to Azure App Service upon Test Pipeline Success
* Select the created app service
* Select **Deployment options**
* Select **Setup**
* Select **Local Git Repository** as the **Source**
* Select **OK**
* You'll then return to the app service screen
* Select **Deployment credentials**
* Provide a **Username** and **Password**
* Select **Save**
* On the Travis CI page for the tracked repository, Select **More options** -> **Settings**
* Create the following environment variables (this protects your deployment credentials - though you'll be depending of the security offered by Travis CI):
  * **AZURE_WA_SITE**: `<App service name>`
  * **AZURE_WA_USERNAME**: `<App service username>`
  * **AZURE_WA_PASSWORD**: `<App service password>`
* Add the following to the existing **.travis.yml** file:

  `deploy:`
  
  `provider: azure_web_apps`
  
* Watch the Job Output of the trigger Travis CI build, if the testing pipeline is successful you should see the following lines:
  * **Installing deploy dependencies**
  * **Preparing deploy**
  * **Deploying application**
* Access the app service by navigating to `https://<YOUR APP SERVICE NAME>.azurewebsites.net`

### Congrats - You've sucessfully configured a CD pipeline for a Nodejs application using Travis CI and Azure Web Services

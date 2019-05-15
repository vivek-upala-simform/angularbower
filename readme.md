
First things first
------------------
If you are on windows, you need to install the Visual c++ compiler. Do this though Visual Studio. (Add/Remove Programs)
You also need to download and install python 2.7 from https://www.python.org/

Download and install node, at the moment of this writing 10.9.0.
https://nodejs.org/en/

When node is installed. Run npm install for these tools:
 - npm install -g gulp
 - npm install -g bower
 
Clone the project
-----------------

The Freewire-frontend project is located here: https://github.com/FreeWireTech/boost-ui.git
You might have to click "Add git credentials here" if you are not using visual studio.

run "git clone https://github.com/FreeWireTech/boost-ui.git" to a folder of your choosing.

cd into the Freewire-frontend folder and run the following commands:
  - npm install
  - bower install
  
Now you are ready to build and run the application.

Handy commands:
  - gulp build -> Will build the project
  - gulp zip -> Will build and zip the code for deployment
  - gulp zip:prod -> will build and zip the code for deployment, using the prod config.
  - gulp serve -> Will spin up the built in web server and host the frontend application on your machine, with dev config
  - gulp server:local -> Same as above, but it expects the backend to be running on the same machine (ie localhost)
  
Below there are more commands explained in detail.
  
Building and testing the project
--------------------------------

There are at the moment 2 targets with their own configuration variables. These are
  - dev
  - prod
  
To build dev, run
  - gulp build (will use dev config)
  - gulp build:dev

To build prod, run
  - gulp build:prod

To build and zip project, run
  - gulp zip (will use dev config)
  - gulp zip:dev
  - gulp zip:prod
  
 Built code will end up in the "dist" folder
 Zipped code will end up in the "deploy" folder
 
Configuration files
-------------------
These are located under 
 - src/app/env/dev/app.config.json
 - src/app/env/prod/app.config.json
 - src/app/env/local/app.config.json 
 
What happens to the app.config.json
-----------------------------------
When you build the application, the contents of these files will end up under /src/app/app.config. This is done so it will get picked-up by the minify and zip scripts. The app.config.js file is not pushed to the git repository, as it is auto-generated and you will find it in .gitignore file.
 
Folder structure
----------------
src
  - app (More folder, and core components like index.config, index.constants, index.route)
    - components (controllers, services, etc)
    - env (environment config files)
    - styles (scss)

index.route.js will contain all the available routes with connected view and controller.


First things first
------------------
If you are on windows, you need to install the Visual c++ compiler. Do this though Visual Studio. (Add/Remove Programs)
You also need to download and install python 2.7 from https://www.python.org/

Download and install node, at the moment of this writing 10.9.0.
https://nodejs.org/en/

When node is installed. Run npm install for these tools:
 - npm install -g yarn 
 
Clone the project
-----------------

The Freewire-frontend project is located here: https://github.com/FreeWireTech/boost-ui.git
You might have to click "Add git credentials here" if you are not using visual studio.

run "git clone https://github.com/FreeWireTech/boost-ui.git" to a folder of your choosing.

cd into the Freewire-frontend folder and run the following commands:
  - yarn install  
  
Now you are ready to build and run the application.

Handy commands:
  - yarn build -> Will build the project
  
Below there are more commands explained in detail.
  

 Built code will end up in the "build" folder
 
 Folder structure
----------------
src
  - app (More folder, and core components like index.config, index.constants, index.route)
    - components (controllers, view, etc)
    - fonts (fonts of the css,scss)
    -images (images which are render on website)
    - services (services of the app)
    - styles (scss)

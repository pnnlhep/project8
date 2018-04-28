# Frontend app

`cd` into `frontend` folder

If doing a first-time setup, run `yarn install` or `npm install` to install all the dependencies

Then run `yarn start` or `npm start` to start serving up the frontend app using a development server for subsequent runs

Go to [http://localhost:4200](http://localhost:4200)


# Backend app

`cd` into `backend` folder

If doing a first-time setup, run `yarn install` or `npm install` to install all the dependencies

There are several commands to execute which include:

* `yarn build` or `npm run build`
    - Run this to compile Typescript code to Javascript and put the generated output into the `dist` folder
    - **Note**: This does not start up the server, see the following commands to start the server

* `yarn start` or `npm start`
    - Build the code and start up the backend server
    
* `yarn watch` or `npm run watch`
    - Build the code and start the backend server in watch mode meaning everytime the `build` command is run, it will restart the server automatically
    
* `yarn debug` or `npm run debug`
    - Build the code and start the backend server with the debugger attached
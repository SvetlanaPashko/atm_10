# E2E UI autotests

###Preparation:
Clone the repository
Execute the command `npm install`
Run tests with the command `npm test`


### How to change log level:

If you want to change log level, run the following command in the terminal:
`npm test -- --level=[trace|debug|info|warn|error]`

Logs you can find by this path `.\artifacts\log4js\`.
Every tests run will:
- create a new file (`${new Date().valueOf()}`) of logs 
- with current date and time 
- ID of the current process `${process.pid}`

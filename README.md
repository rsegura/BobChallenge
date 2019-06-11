# BoB Challenge coding test

## Requirements

* Mongodb >= 8.11
* Redis >= 3.0.5
* NodeJS >= V4.0


## Usage
first execute npm install
Second execute npm start, this start a server on port 3000 and socketIo server on port 40718


This project has 2 endpoints:

* [GET]   /api/connected -> return the trucks with status "delivering"
    * Response => Status code 200
* [GET]  /api/status -> Send a socket event DRIVER_STATUS_REQUEST, store all the DriverStatus in MongoDB and the response is all the socketIO connection. 
    * Response => Status code 200
    
    
## Test

Unfortunately I haven't had time to implement tests

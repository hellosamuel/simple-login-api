### Simple Login API
* This is simple login api written by nodejs
* This api uses JWT(Json Web Token) instead of session on server
* DB environment is MONGO_DB so if you want to test this api, you need to get MONGO DB connect information
* You can use MONGO DB(Cloud) at [mLab](https://mlab.com/) for free (limit 500MB)
* If you got MONGO DB connect information, just put it in const MONGO_DB in `server.js` 
* I recommend you to use `nodemon` to run server at local environment


##### How to use
```bash
# if you didn't install nodemon command `npm install -g nodemon` first
$ cd [PROJECT_FOLDER]
$ nodemon
...
listening on port:3000
DB connected!
```
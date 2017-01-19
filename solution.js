var mongo = require('mongodb').MongoClient
var age = process.argv[2]
var url = 'mongodb://localhost:27017/learnyoumongo'


    mongo.connect(url, function(err, db) {
      // db gives access to the database
    })
// // const mysql = require('mysql2')

// // const pool = mysql.createPool({
// //     host: 'localhost',
// //     user: 'root',
// //     database: 'node-complete',
// //     password: 'sharmila202',
// // })

// // module.exports = pool.promise();

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (callback) => {
//   MongoClient.connect(
//     "mongodb+srv://bishalsunuwar24:H8r22pd626h5KcDJ@cluster0.sarsdqb.mongodb.net/?retryWrites=true&w=majority"
//   )
//     .then((client) => {
//       console.log("Connected");
//       _db = client.db();
//       callback();
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw "No database found";
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;

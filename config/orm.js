const connection = require("./connection.js");

const orm = {
  selectAll(table, cb) {
    const queryString = `SELECT * FROM ??`;
    connection.query(queryString, [table], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  // insertOne(, cb)

  // updateOne(, cb)
};

module.exports = orm;

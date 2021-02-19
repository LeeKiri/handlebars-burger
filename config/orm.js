const connection = require("./connection.js");

const orm = {
  selectAll(table, cb) {
    const queryString = `SELECT * FROM ?`;
    connection.query(queryString, [table], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne(table, name, dev, cb) {
    const queryString = `INSERT INTO ? VALUE(?, ?)`;
    connection.query(queryString, [table, name, dev], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  // updateOne(, cb)
};

module.exports = orm;

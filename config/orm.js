const connection = require("./connection.js");

const orm = {
  selectAll(table, cb) {
    const queryString = `SELECT * FROM ??`;
    connection.query(queryString, [table], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne(table, col1, col2, name, bool, cb) {
    const queryString = `INSERT INTO ? (?, ?) VALUES (?, ?)`;
    connection.query(
      queryString,
      [table, col1, col2, name, bool],
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  },

  updateOne(table, col, devVal, cb) {
    const queryString = `UPDATE ? WHERE ?? SET ??`;
    connection.query(queryString, [table, col, devVal], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;

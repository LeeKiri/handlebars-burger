const connection = require("./connection.js");

const orm = {
  selectAll(table, cb) {
    const queryString = `SELECT * FROM ??`;
    connection.query(queryString, [table], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne(table, cols, vals, cb) {
    const queryString = `INSERT INTO ?? (??, ??) VALUES (?, ?)`;
    connection.query(queryString, [table, ...cols, ...vals], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  updateOne(table, colObj, valObj, cb) {
    const queryString = `UPDATE ${table} SET ? WHERE ?`;
    console.log(queryString)
  const statement =  connection.query(queryString, [colObj, valObj], (err, res) => {
      if (err) throw err;
      cb(res);
    })
    console.log(statement.sql)
  }
};

module.exports = orm;

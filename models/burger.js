const orm = require("../config/orm.js");

//call the orm functions with burger specific input for the orm
const burger = {
  selectAll(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },

  insertOne(col1, col2, name, bool, cb) {
    orm.insertOne('burgers', col1, col2, name, bool, (res) => cb(res));
  },

  updateOne(col, devVal, cb){
  orm.selectAll('burgers', col, devVal, (res) => cb(res));
  },
};
module.exports = burger;

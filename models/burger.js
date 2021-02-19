const orm = require("../config/orm.js");

//call the orm functions with burger specific input for the orm
const burger = {
  selectAll(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },

  insertOne(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, (res) => cb(res));
  },

  updateOne(colObj, valObj, cb){
      console.log(colObj, valObj)
  orm.updateOne('burgers', colObj, valObj, (res) => cb(res));
  },
};
module.exports = burger;

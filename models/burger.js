const orm = require("../config/orm.js");

//call the orm functions with burger specific input for the orm
const burger = {
  selectAll(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },

  insertOne(name, dev, cb) {
    orm.insertOne('burgers', name, dev, (res) => cb(res));
  },

  // updateOne(, cb){
  // orm.selectAll('burgers', (res) => cb(res));
  // },
};
module.exports = burger;

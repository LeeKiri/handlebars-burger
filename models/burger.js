const orm = require('../config/orm.js');

//call the orm functions with burger specific input for the orm
const burger = {
    selectAll(cb){
        orm.selectAll('burgers', (res) => cb(res));
    },
    
    // insertOne(, cb) {
    // orm.selectAll('burgers', (res) => cb(res));
    // };

    // updateOne(, cb){
    // orm.selectAll('burgers', (res) => cb(res));
    // };
}
module.exports = burger;
const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model

//creating table
let Band = sequelize.define("Bands", {
    name: Sequelize.STRING,
    instrument: Sequelize.STRING
})

//inserting into table
//const testBands = Band.create({
//    name: "Alvin & chicmunks",
//    instrument: "Pop",
//})


//find by/ findAll primary key
async function print(){
    const row = await Band.findByPk(1)
    console.log(row);
}

print()


module.exports = {
    Band
};
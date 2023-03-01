const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
let Musician = sequelize.define("Musician", {
    name: Sequelize.STRING,
    genre: Sequelize.STRING
})

const simon =  Musician.create({
    name: "Simon",
    genre: "pop",
    BandId: 2
})

module.exports = {
    Musician
};
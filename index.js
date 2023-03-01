const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Songs} = require("./Songs")
//associating the two models

Band.hasMany(Musician)
Musician.hasOne(Band)

Songs.belongsToMany(Musician, {through: "Musicians_Songs"});
Musician.belongsToMany(Songs, {through: "Musicians_Songs"});


module.exports = {
    Band,
    Musician,
    Songs
};

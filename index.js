const {Band} = require('./Band')
const {Musician} = require('./Musician')
//associating the two models

Band.hasMany(Musician)
Musician.hasOne(Band)

const musician1 = Musician.findByPk(1)

const someBand = Band.findByPk(1);



module.exports = {
    Band,
    Musician
};

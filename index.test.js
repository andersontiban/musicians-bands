const {sequelize} = require('./db');
const {Band, Musician, Songs} = require('./index')


describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({
            name: "The Beatles",
            instrument: "guitar"
        }) 
        const testBand2 = await Band.create({
            name: "Alvin and the Chicmunks",
            instrument: "voice"
        })
        const testBand3 = await Band.create({
            name: "Jazz Band",
            instrument: "trumpet"
        })  

        expect(testBand.name).toBe('The Beatles');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({
            name: "Bruno Mars",
            genre: "Everything",
            BandId: 1
        });
        
        expect(testMusician.name).toBe('Bruno Mars');
    })

    //add multiple musicians to a band
    test("add multiple musicians to band", async () => {
        const alvin = await Musician.create({
            name: "Alvin",
            genre: "pop",
            BandId: 2
        });
        const simon = await Musician.create({
            name: "Simon",
            genre: "pop",
            BandId: 2
        });
        expect(alvin.BandId).toBe(2);
    })

    test("add multiple musicians to band", async() =>{
        const newBand = await Band.create({
            name: "Rock",
            instrument: "drums"
        })
        const newSong = await Songs.create({
            title: "Good vibes",
            year: 2016
        })
        const newSong2 = await Songs.create({
            title: "Ocean",
            year: 1968
        })
        expect()
    })
    test("Eager load data", async() => {
        const allBands = Band.findAll({
            include: [
                {model: Musician, as: "BandMusicians"}
            ]
        })
        const allSongs = Band.findAll({
            include: [
                {model : Songs, as : "BandSongs"}
            ]
        })
        expect(allBands.id).toBe();
    })
})
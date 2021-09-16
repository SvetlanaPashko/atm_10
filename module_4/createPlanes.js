const MilitaryPlane = require('./Planes/MilitaryPlane');
const PassengerPlane = require('./Planes/PassengerPlane');
const ExperimentalPlane = require('./Planes/experimentalPlane')
const MILITARY_TYPE = require('./models/militaryType');
const EXPERIMENTAL_TYPES = require('./models/ExperimentalTypes');
const CLASSIFICATION_LEVEL = require('./models/classificationLevel');

let planes = [
    new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
    new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
    new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
    new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
    new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
    new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
    new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
    new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
    new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MILITARY_TYPE.BOMBER),
    new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MILITARY_TYPE.BOMBER),
    new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MILITARY_TYPE.BOMBER),
    new MilitaryPlane('F-15', 1500, 12000, 10000, MILITARY_TYPE.FIGHTER),
    new MilitaryPlane('F-22', 1550, 13000, 11000, MILITARY_TYPE.FIGHTER),
    new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MILITARY_TYPE.TRANSPORT),
    new ExperimentalPlane("Bell X-14", 277, 482, 500, EXPERIMENTAL_TYPES.HIGH_ALTITUDE, CLASSIFICATION_LEVEL.SECRET),
    new ExperimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, EXPERIMENTAL_TYPES.VTOL, CLASSIFICATION_LEVEL.TOP_SECRET)
];

module.exports = {
    planes
}
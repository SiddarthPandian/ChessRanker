export const Profiles = new Mongo.Colection('tournaments');

Profiles.schema = new SimpleSchema({
    name: {
        type: String
    },
    user: {
        type: String
    },
    players: {
        type: [PlayerSchema]
    }

});

var Players = new SimpleSchema({
    name: {
        type: String
    },
    elo: {
        type: Number
    }
});

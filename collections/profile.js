export const Profiles = new Mongo.Colection('profiles');

Profiles.schema = new SimpleSchema({
    name: {
        type: String,
        optional: true
    },
    username: {
        type: String
    },
    rank: {
        type: Number,
        defaultValue: 1200
    },

});

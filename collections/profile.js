export const Profiles = new Mongo.Colection('profiles');

Profiles.schema = new SimpleSchema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    tournaments: {
        type: [String]
    }
});

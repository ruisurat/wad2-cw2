const Datastore = require("nedb");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class Staff {
    constructor(dbFilePath) {
        if(dbFilePath) {
            this.db = new Datastore({filename: dbFilePath, autoload: true});
        } else {
            this.db = new Datastore();
        }
    }

    init() {
        this.db.insert({
            user: 'Admin',
            password: '$2a$12$BsZPPne6cxaiLOqURI6lzu2KlyyoVxbQMA3mWSU.jP3OeUp.JJYMq'
        });

        return this;
    }

    create(username, password) {
        const that = this;
        bcrypt.hash(password, saltRounds).then(function(hash) {
                var entry = {
                user: username,
                password: hash,
            };
            that.db.insert(entry, function (err) {
                if (err) {
                    console.log("Can't insert user: ", username);
                }
            });
        });
    }

    lookup(user, cb) {
        this.db.find({'user': user}, function(err, entries) {
            if (err) {
                return cb(null, null);
            } else {
                if (entries.length === 0) {
                    return cb(null, null);
                }
                return cb(null, entries[0]);
            }
        });
    }
}

const dao = new Staff();
dao.init();

module.exports = dao;

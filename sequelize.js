const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("football", "root", "thornPassword", {
  host: "127.0.0.1",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.score = require("./models/score")(sequelize, Sequelize);
db.team = require("./models/team")(sequelize, Sequelize);
db.match = require("./models/match")(sequelize, Sequelize);

module.exports = db;

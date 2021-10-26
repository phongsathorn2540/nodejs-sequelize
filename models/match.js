module.exports = (sequelize, Sequelize) => {
  const match = sequelize.define(
    "match",
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      match_date: {
        type: Sequelize.DATE(),
        allowNull: false,
        field: "match_date",
      },
      teamhome: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "teamhome",
      },
      teamaway: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "teamaway",
      },
    },
    {
      tableName: "match",
    }
  );

  return match;
};

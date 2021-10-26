module.exports = (sequelize, Sequelize) => {
  const score = sequelize.define(
    "score",
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      match_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "match_id",
      },
      teamhome_score: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "teamhome_score",
      },
      teamhome_score: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "teamhome_score",
      },
    },
    {
      tableName: "score",
    }
  );

  return score;
};

module.exports = (sequelize, Sequelize) => {
  const team = sequelize.define(
    "team",
    {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      name: { type: Sequelize.STRING(255), allowNull: false, field: "name" },
    },
    {
      tableName: "team",
    }
  );

  return team;
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      // VERSION PRO DE ID
      // id:{
      //    type: DataTypes.UUID, // 123e2ad-255czaa4-ddajqq1
      //    defaultValue: DataTypes.UUIDV4,
      //    primaryKey: true,
      //    allowNull: false
      // },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // NO LO PONEMOS POR SI GENERA CONFLICTO
        // validate:{
        //    isEmail: true
        // }
      },
      password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        // validate:{
        //   is: ["^[a-z]+$",'i']
        // }
      },
    },
    {
      timestamps: false,
    }
  );
};

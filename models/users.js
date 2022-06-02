// const { get } = require("express/lib/response");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      name: {
        type: DataTypes.STRING,
        defaultValue: "null",

        //setter and getter
        // set(value){
        //     this.setDataValue('name',value+' abhi');
        // },
        // get(){
        //     return this.getDataValue('name')+" XYZ"
        // }
      },
      
      email: {
        type: DataTypes.STRING,
        // defaultValue: "test@gmail.com",

        //constraints
        // allowNull: false,
        // unique: true,
      },
      gender: {
        type: DataTypes.STRING,
        // defaultValue: "null",

        // validate: {
        //   // equals:"male"
        //   // equals:{
        //   //     args:"male",
        //   //     msg:"please enter correct gender as male"
        //   // }
        //   // isIn:[["male","female"]]
        //   isIn: {
        //     args: [["male", "female"]],
        //     msg: "please select correct gender as male/female",
        //   },
        // },
      },
    },
    {
      // tableName:"loginusers",
      timestamps: false,
      // createdAt:false
      // updatedAt:false
      // createdAt:"created",
      // updatedAt:"updated"
    }
  );
  return Users;
};

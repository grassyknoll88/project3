var bcrypt = require("bcrypt-nodejs");

module.exports = function(Sequelize, DataTypes) {
  var Dog = Sequelize.define("Dog", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    pet_name: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    city: {
      type:  DataTypes.STRING,
      notEmpty: true
    },
    state: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    zipcode: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    breed: {
      type: DataTypes.TEXT,
      notEmpty: true
    },
    size: {
      type: DataTypes.TEXT,
      notEmpty: true,
      values: ["Extra Large", "Large", "Medium", "Small", "Extra Small"]
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 300]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
     //validate: {isEmail:true}
    },

    imgUrl: {
      type: DataTypes.TEXT
    }

    // classMethods: {
    //     associate: function(models) {
    //         Dog.hasMany(models.Review);
    //     }
    // } 
  });
  Dog.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  Dog.hook("beforeCreate", function(Dog) {
    Dog.password = bcrypt.hashSync(Dog.password, bcrypt.genSaltSync(10), null);
  });
  return Dog;
};

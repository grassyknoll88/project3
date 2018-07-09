module.exports = function(Sequelize, DataTypes) {
  var Chat = Sequelize.define("Chat", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING,
      notEmpty: true
    }
  });

  // Chat.associate = function(models) {
  //   Chat.hasMany(models.Messages);
  // };


  return Chat;
};

module.exports = function(Sequelize, DataTypes) {
  var Message = Sequelize.define("Message", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    text: {
      type: DataTypes.STRING
    },
    chat_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  });
  Message.associate = function(models) {
    Message.belongsTo(models.Chat);
  };

  return Message;
};

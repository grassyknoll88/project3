// module.exports = function(Sequelize, DataTypes) {
  
// 	var User = Sequelize.define('User', {
// 		id: { 
// 			autoIncrement: true, 
// 			primaryKey: true, 
// 			type: DataTypes.INTEGER
// 		},
// 		username: { 
// 			type: DataTypes.STRING,
// 			notEmpty: true
//         },
//         password : {
// 			type: DataTypes.STRING,
// 			allowNull: false 
//         }, 
//         last_login: {
// 			type: DataTypes.DATE
// 		}, 
//         classMethods: {
//             associate: function(models) {
//                 User.hasMany(models.Dogs);
//             }
//         }

// });
// 	return User;

// };
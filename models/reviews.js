module.exports = function(Sequelize, DataTypes) {
  
	var Review = Sequelize.define('Review', {
		id: { 
			autoIncrement: true, 
			primaryKey: true, 
			type: DataTypes.INTEGER
		},
		username: { 
			type: DataTypes.STRING,
			notEmpty: true
        },
        name: { 
			type: DataTypes.STRING,
			notEmpty: true
		},
        review: {
            type: DataTypes.TEXT,
            validate: {
                len: [1, 300]
            }
        },
		email: { 
			type:DataTypes.STRING, 
			allowNull: false, 
			unique: true, 
			validate: {isEmail:true} 			
		},
        status: {
			type: DataTypes.ENUM('active','inactive'),
			defaultValue:'active' 
		},

    });
    // Review.associate = function(models) {
    //     models.Review.belongsTo(models.Dog, {
    //         foriengKey: {
    //             allowNull: false
    //         }
    //     });
    // };
	return Review;

}; 


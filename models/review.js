module.exports = function(Sequelize, DataTypes) {
  
	var Review = Sequelize.define('Review', {
		id: { 
			autoIncrement: true, 
			primaryKey: true, 
			type: DataTypes.INTEGER
        },
        review: {
            type: DataTypes.TEXT,
            validate: {
                len: [1, 300]
            }
        },

		Dog_id: {
            type: DataTypes.INTEGER
        },


    });
    Review.associate = function(models) {
        models.Review.belongsTo(models.Dog, {
            foriengKey: {
                allowNull: false
            }
        });
    };
	return Review;

}; 
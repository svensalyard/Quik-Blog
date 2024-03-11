const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class comment extends Model {}

comment.init({
  id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	text: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			min: 5,
			max: 200,
		},
	},
},
{
	sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: 'comment',
});

module.exports = comment;
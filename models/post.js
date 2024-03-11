const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class post extends Model {}

post.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	text: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			min: 5,
			max: 500,
		}
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			min: 5,
			max: 100,
		}
	}
},
{
	sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: 'post',
});

module.exports = post;
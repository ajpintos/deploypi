const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    // Model definition
    sequelize.define('Activity', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
        },
        difficulty:{
            type: DataTypes.ENUM('1','2','3','4','5'),
        },
        duration:{
            type: DataTypes.INTEGER,
        },
        season:{
            type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        },
        },
        {timestamps: false})
};
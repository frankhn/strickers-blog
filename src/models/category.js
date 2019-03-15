import Sequelize from 'sequelize'
import dbconfig from '../config/db-config';

const Category = dbconfig.define('category_table', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    parent: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
    }
});
Category.sync({force: false})

export default Category;

import Sequelize from 'sequelize';
import sequelize from '../config/db-config';

// create badwords model

const BadWords = sequelize.define('badwords', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  word: {
    type: Sequelize.TEXT,
    required: true,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});
BadWords.sync({ force: false }).then(() => {
// dbLog(`BadWords table is created`)
});
export default BadWords;

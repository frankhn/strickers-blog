import Sequelize from 'sequelize';
import debug from 'debug';
import sequelize from '../config/db-config';

const dbDebug = debug('app:db');

class BadWord {
  constructor() {
    // define user model
    this.BadWordModel = sequelize.define('bad_words', {
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      word: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        required: true,
      },
    });
    this.BadWordModel.sync({ force: false }).catch(error => dbDebug(`Words table is not created ${error}`));
  }

  async create(word) {
    if (!word.length) {
      return 'can not store an empty word';
    }
    return this.BadWordModel.create({ word });
  }

  // change deleted to true using the ID
  async deleteWord(deleteInfo) {
    return this.BadWordModel.update({ deleted: true },
      { returning: true, where: { id: deleteInfo.id } });
  }

  // update existing world
  async updateWord(id, word) {
    return this.BadWordModel.update({ word, deleted: false },
      { returning: true, plain: true, where: { id } });
  }

  async findAll(word) {
    if (word) {
      return this.BadWordModel.findAll({ where: { word }, attributes: ['word'] });
    }
    return this.BadWordModel.findAll({ where: { deleted: false }, attributes: ['id', 'word'] });
  }
}
export default new BadWord();

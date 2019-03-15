import db from '../models/badword';

const BadWord = {
  /**
       * Badwords
       * @param {object} req
       * @param {object} res
       * @returns {object} Badwords object
       */
  async getArticles(req, res) {
    return `${db} >> ${req} >> ${res}`;
  },
};

export default BadWord;

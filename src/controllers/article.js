import { validator, validationErrors } from '../helpers/index';
import Articledb from '../models/article';
import BadWorddb from '../models/badword';

const Articles = {
  /**
       * Create A Article
       * @param {object} req
       * @param {object} res
       * @returns {object} Article object
       */
  async addArticle(req, res) {
    // Validate Data
    const { error } = validator('article', req.body);
    if (error) {
      return validationErrors(res, error);
    }

    const badwords = await BadWorddb.findAll({ attributes: ['word'], where: { deleted: false } });
    const badwordsList = badwords.map(d => d.dataValues.word);
    const { content } = req.body;
    let findBadWord = false;
    badwordsList.forEach((specificWord) => {
      findBadWord = ((content.includes(specificWord) && specificWord !== '') ? true : findBadWord);
    });
    if (findBadWord) {
      const errorResponse = {
        status: 400,
        error: 'Contains bad word',
      };
      return res.status(400).send(errorResponse);
    }


    const insertArticle = Articledb.build({
      title: req.body.title,
      content: req.body.content,
      user: req.body.user,
      category: req.body.category,
      tags: req.body.tags,
      agelimit: req.body.agelimit,
    });
    insertArticle.save().then(() => {
      const response = {
        status: 201,
        data: [{
          id: insertArticle.id,
          title: req.body.title,
          content: req.body.content,
          author: req.body.user,
          date: insertArticle.date,
          category: req.body.category,
          tags: req.body.tags,
          agelimit: req.body.agelimit,
          reviewed: insertArticle.reviewed,

        }],
      };
      return res.status(201).send(response);
    });
    return false;
  },
  /**
       * Fethc all articles
       * @param {object} req
       * @param {object} res
       * @returns {object} Article object
       */
  async getArticles(req, res) {
    return res.status(201).send({ status: 200, data: 'LIST COMING SOON' });
  },
};

export default Articles;

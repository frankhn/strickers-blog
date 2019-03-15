import Sequelize from 'sequelize';
// import debug from 'debug';
import sequelize from '../config/db-config';

const Comment = sequelize.define('comment_table', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  comment: {
    type: Sequelize.TEXT(),
  },
  articleid: {
    type: Sequelize.INTEGER(),
  },
  userid: {
    type: Sequelize.INTEGER(),
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: new Date(),
  },
});

Comment.sync({ force: false });
// .then((commentModal) => {
//   console.log('comment table created table created');
// }).catch((err) => {
//   console.log('comment table not created', err);
// });

export default Comment;

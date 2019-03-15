import BadWords from '../models/bad-word';

// CRETE WORD CONTROLLER
const create = async (req, res) => {
  const { word } = req.body;
  try {
    const checkExists = await BadWords.findAll(word);
    const words = JSON.parse(JSON.stringify(checkExists));
    if (words[0].word === word) {
      return res.status(400).json({ status: 400, error: 'The word you are trying to add is already in the list' });
    } if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].some(number => word.includes(number))) {
      return res.status(400).json({ status: 400, error: 'Words do not include numbers' });
    }
    const addedWord = await BadWords.create(word);
    return res.status(201).json({ status: 200, data: addedWord });
  } catch (error) {
    return res.status(500).json({ status: 500, error: `Error ${error}` });
  }
};
// DELETE WORD CONTROLLER
const deleteWord = (req, res) => {
  const { id } = req.params;
  if (parseInt(id, 10) > 0) {
    BadWords.deleteWord({ id })
      .then(deleted => res.status(204).json({ status: 204, data: deleted[1] })).catch(error => res.status(500).json({ status: 500, error: `Failed to delete The word: ${error}` }));
  }
};
// UPDATE WORD CONTROLLER
const updateWord = (req, res) => {
  const { word } = req.body;
  const { id } = req.params;

  if (!word.length) res.status(400).json({ status: 400, error: 'It is not a good Idea to submit an empty world' });
  else {
    BadWords.updateWord(id, word)
      .then(updates => res.status(200).json({ status: 200, data: updates }))
      .catch(error => res.status(500).json({ status: 500, error: `Server error ${error}` }));
  }
};

// GET WORDS
const getWords = (req, res) => {
  BadWords.findAll().then((allWords) => {
    res.status(200).json({ status: 200, data: allWords });
  })
    .catch(error => res.status(500).json({ status: 500, error: `Server error ${error}` }));
};

export default {
  create, deleteWord, updateWord, getWords,
};

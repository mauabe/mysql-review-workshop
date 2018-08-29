const db = require('../database/model.js');

module.exports = {
  fetch: (req, res) => {
    console.log ('In GET...');
    const { listName } = req.query;
    db.Todo.findAll({
      where: {
        list_name : listName
      }
    }).then(todos => {
      if (todos) {
        res.status(200).send(todos);
      } else {
        res.status(404).send('List not found');
      }
    })
    .catch(err => res.status(404).send(err));
  
  },

  post: (req, res) => {
    console.log ('In POST...')
    const { todo, listName } = req.query;
    db.Todo.create({
      name: todo,
      list_name: listName
    })
  },

  delete: (req, res) => {
    console.log ('In DELETE...');
    const {todo} = req.query;
    db.Todo.destroy({
      where : {name: todo}
  })
  .then (() => {
    res.status(202)
}
  
}
};

var Sequalize = require('sequalize');
var db = new Sequalize('postgres://localhost:5432/wikistack');

var Page = db.define('page', {
  title: {
    type: Sequalize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequalize.STRING,
    allowNull: false
  },
  content: {
    type: Sequalize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequalize.STRING,
    allowNull: false
  }
});

var User = db.define('user', {
  name: {
    type: Sequalize.STRING,
    allowNull: false
  },
  email: {
    type: Sequalize.STRING,
    allowNull: false
  }
});

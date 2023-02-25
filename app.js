const express = require('express')
const app = express()
const port = 30001


app.use(express.json());
app.use(express.static('public'));

const parser = require('body-parser');
app.use(parser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static( 'public'));


const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('postgres://react-o-blog_user:letsGo@127.0.0.1/react-o-blog_mfcg')


const { User, Post, Favorites } = require('./models');



app.post('/users', async (req, res) => {
  // req.body contains an Object with firstName, lastName, email
 const { firstName, lastName, userName, email, password } = req.body;
 const newUser = await User.create({
     firstName,
     lastName, 
     userName, 
     email,
    password
 });
 
 // Send back the new user's ID in the response:
  res.json({
      id: newUser.id
  })
})


app.post('/add-favorites/:id', async (req, res) => {
     const { id } = req.body;
     const addFavorite = await Favorites.create({
      id
     })
     res.json({
      id: addFavorite.id
     })
});
 
app.post('/posts', async (req, res) => {
   // req.body contains an Object with firstName, lastName, email
  const { post, favorites, title } = req.body;
  const newPost = await Post.create({
      post,
      favorites,
      title 
  });
  
  // Send back the new user's ID in the response:
  res.json({
      id: newPost.id
})
})

app.delete('/delete-posts/:id', async (req, res) => {
  const { id } = req.params;
  const deletedPost = await Post.destroy({
      where:
       {
          id
      }
  });
  res.json(deletedPost);
});

app.delete('/delete-favorites/:id', async (req, res) => {
    const { id } = req.params;
    const deleteFavorite = await Post.destroy({
        where:
         {
            id
        }
    });
    res.json(deleteFavorite);
  });

  app.get('/list-posts/:id', async (req, res) => {
    const { id } = req.params;
    const findPost = await Post.findOne({
        where:
         {
            id
        }
    });
    res.json(findPost);
  });

app.get('/list-users', async (req, res) => {
  const users = await User.findAll({
      attributes: ['firstName', 'lastName', 'userName', 'password', 'email']
  });
  res.json(users);
});

app.get('/list-posts', async (req, res) => {
  
  const posts = await Post.findAll({
      attributes: ['id','post', 'title', 'favorites', 'createdAt']
  });
  res.json(posts);
});


app.get('/list-favorites', async (req, res) => {
  
  const posts = await Favorites.findAll({
      attributes: ['postid','favorites']
  });
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
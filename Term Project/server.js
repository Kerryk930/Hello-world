const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(express.json()); 

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const data = require('./data.json');

app.get('/posts', (req, res) => {
    if (data['posts']) {
        res.json(data.posts);
    }
});


app.get('/posts/:postId', (req, res) => {
    const { postId } = req.params;
    const post = data.posts[postId];
    if (post) {
        res.json({post});
    } else {
        res.status(404).send('Post not found');
    }
});

app.post('/posts')

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

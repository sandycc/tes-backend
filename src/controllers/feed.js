exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{titile: 'First Post', content: 'This is the first post'}] 
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    //Create Post in db
    res.status(201).json({
        message: 'Post created Successfully!',
        post: { id: new Date().toISOString(), title: title, content: content}
    });
};
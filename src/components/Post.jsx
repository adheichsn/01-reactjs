import  classes from'./Post.module.css';

function PostPage({ author, body }) {
    return(
    <div className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
    </div>
    );
}

export default PostPage;
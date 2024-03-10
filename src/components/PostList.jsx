import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';
import Modal from './Modal';

function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    let modalContent;

    // if (modalIsVisible) {
    //     modalContent = (
    //         <Modal onClose={hideModalHandler}>
    //             <NewPost
    //                 onBodyChange={bodyChangeHandler}
    //                 onAuthorChange={authorChangeHandler}
    //             />
    //         </Modal>
    //     );
    // }

    return (
        <>
            {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                    <NewPost
                        onBodyChange={bodyChangeHandler}
                        onAuthorChange={authorChangeHandler}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </>
    );
}

export default PostsList;
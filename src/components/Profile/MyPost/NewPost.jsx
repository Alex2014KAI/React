import classesPost from './NewPosts.module.css';

const NewPosts = (props) => {
    return (
    <div className={classesPost.postWrapper}>
        <div className={classesPost.Post}> {props.massage} </div>
        <div className={classesPost.imageLike}> <img className = {classesPost.imageLike__img} src="https://as2.ftcdn.net/v2/jpg/02/17/92/21/1000_F_217922174_FsXqzXCvEJqdKppoZzGnq8HxZewzmrXs.jpg" alt="like" /></div>
        <div className={classesPost.cauntLike}>{props.like}</div>
    </div>
    );
};

export default NewPosts;
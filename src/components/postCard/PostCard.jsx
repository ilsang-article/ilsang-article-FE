import { useMutation } from "@tanstack/react-query";
import { postLikePost, postRecentRead } from "../../api/mainpageAPI";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import classes from "./PostCard.module.css";
import { useState } from "react";
import { timeAgo } from "../../hook/timeAgo";

const PostCard = ({ post, isLikePosts }) => {
  const [likeCheck, setLikeCheck] = useState(post.likeCheck);
  const recentRead = useMutation(({ postId }) => postRecentRead({ postId }));

  const likePost = useMutation(({ postId }) => postLikePost({ postId }), {
    onSuccess: ({ data }) => {
      setLikeCheck(data.data.likeCheck);
    },
    onError: ({ data }) => {
      alert("로그인 후 이용하세요!");
    },
  });

  const recentReadOnlyMembers = () => {
    window.open(post.url);
    recentRead.mutate({ postId: post.id });
  };

  const likePostOnlyMembers = () => {
    likePost.mutate({ postId: post.id });
  };
  const content = post.contents + "•••";
  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        onClick={recentReadOnlyMembers}
        src={post.imageUrl}
        alt={post.title}
      />

      <div className={classes.contents} onClick={recentReadOnlyMembers}>
        <div className={classes.title}>{post.title}</div>
        <article className={classes.content}>{content}</article>
        <div className={classes.info}>
          <span className={classes.date}>{timeAgo(post.writeDate)}</span>
          <span className={classes.writer}>{post.writer}</span>
        </div>
        {/* <Text>{post.contents}</Text> */}
      </div>
      <div className={classes.like} onClick={likePostOnlyMembers}>
        {likeCheck ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />}
        {isLikePosts && (
          <>{post.likeReadCheck ? <div>read</div> : <div>unread</div>}</>
        )}
      </div>
    </div>
  );
};

export default PostCard;

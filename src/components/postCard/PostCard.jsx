import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLikePost, postRecentRead } from "../../api/mainpageAPI";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import classes from "./PostCard.module.css";
import { useState } from "react";
import { timeAgo } from "../../hook/timeAgo";
import { deleteReadCheck } from "../../api/likePageAPI";
import { useEffect } from "react";

const PostCard = ({ post, isLikePosts }) => {
  const [imgSrc, setImgSrc] = useState(post.imgUrl);
  useEffect(() => {
    const loadImage = (url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        if (
          url ===
          "https://ssl.pstatic.net/static.news/image/news/ogtag/navernews_800x420_20221201.jpg"
        ) {
          setImgSrc("/logo-light22.png");
        } else {
          setImgSrc(url);
        }
      };
      img.onerror = () => setImgSrc("/logo-light22.png"); // 로드 실패시 기본 이미지로 설정
    };
    loadImage(post.imageUrl);
  }, [post]);

  const queryClient = useQueryClient();
  const [likeCheck, setLikeCheck] = useState(post.likeCheck);
  const recentRead = useMutation(({ postId }) => postRecentRead({ postId }), {
    onSuccess: () => {
      queryClient.invalidateQueries(["likePosts"]);
    },
  });

  const likePost = useMutation(({ postId }) => postLikePost({ postId }), {
    onSuccess: ({ data }) => {
      setLikeCheck(data.data.likeCheck);
    },
    onError: () => {
      alert("로그인 후 이용하세요!");
    },
  });

  const recentReadOnlyMembers = () => {
    window.open(post.url);
    recentRead.mutate({ postId: post.id });
  };

  const onDeleteReadCheckHandler = () => {
    deleteReadCheck(post.id).then(() =>
      queryClient.invalidateQueries(["likePosts"])
    );
  };

  const likePostOnlyMembers = () => {
    likePost.mutate({ postId: post.id });
  };
  const content = post.contents + "•••";
  return (
    <div className={classes.container}>
      {isLikePosts &&
        (post.readCheck ? (
          <div className={classes.readCheck} onClick={onDeleteReadCheckHandler}>
            👀
            <input type="checkbox" defaultChecked={true} />
          </div>
        ) : (
          <div
            className={classes.readCheck}
            onClick={() => recentRead.mutate({ postId: post.id })}
          >
            <input type="checkbox" defaultChecked={false} />
          </div>
        ))}
      <img
        className={classes.img}
        onClick={recentReadOnlyMembers}
        src={imgSrc}
        alt={post.title}
        onError={"/logo-dark.png"}
      />

      <div className={classes.contents} onClick={recentReadOnlyMembers}>
        <div className={classes.title}>{post.title}</div>
        <article className={classes.content}>{content}</article>
        <div className={classes.info}>
          <span className={classes.date}>⏱️ {timeAgo(post.writeDate)}</span>
          <span className={classes.writer}>🖋️ {post.writer}</span>
        </div>
      </div>
      <div className={classes.like} onClick={likePostOnlyMembers}>
        {likeCheck ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />}
      </div>
    </div>
  );
};

export default PostCard;

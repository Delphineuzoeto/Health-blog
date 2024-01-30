"use client";
import Link from "next/link";
import styles from "./comment.module.css";
import Image from "next/image";
import { useState } from "react";

const Comment = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]) // prettier-ignore

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return currentDate.toLocaleString(undefined, options);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setComments((prevComments) => [
        ...prevComments,
        {
          id: Date.now(),
          text: commentText,
          profilePix: "",
          username: "Amaka",
          dateTime: getCurrentDateTime(),
        },
      ]);
      setCommentText("");
    }
  };

  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Impressed? leave a comment</h3>
      {status === "authenticated" ? (
        <div className={styles.write_container}>
          <textarea
            cols={30}
            rows={2}
            placeholder="write your comment..."
            className={styles.textarea}
            onChange={handleChange}
            value={commentText}
          />
          <button
            className={styles.comment_button}
            onClick={handleCommentSubmit}
          >
            Comment
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write</Link>
      )}

      {/* to add new comments */}
      <div className={styles.comments}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.user}>
              <Image
                src={comment.profilePix}
                alt={`Profile of ${comment.username}`}
                height={30}
                width={30}
                className={styles.comment_user_image}
              />
              <div className={styles.user_info}>
                <span className={styles.comment_user_name}>
                  {comment.username}
                </span>
                <span className={styles.comment_date}>{comment.dateTime}</span>
              </div>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}

        {/* demo comments */}

        {/* <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/Dels_profilepix.jpg"
              alt="user profile"
              height={30}
              width={30}
              className={styles.comment_user_image}
            />
            <div className={styles.user_info}>
              <span className={styles.comment_user_name}>Delphine</span>
              <span className={styles.comment_date}>01.27.2024</span>
            </div>
          </div>
          <p className={styles.user_comment}>Continue with your good work!</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/Dels_profilepix.jpg"
              alt="user profile"
              height={30}
              width={30}
              className={styles.comment_user_image}
            />
            <div className={styles.user_info}>
              <span className={styles.comment_user_name}>Delphine</span>
              <span className={styles.comment_date}>01.27.2024</span>
            </div>
          </div>
          <p className={styles.user_comment}>Continue with your good work!</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/Dels_profilepix.jpg"
              alt="user profile"
              height={30}
              width={30}
              className={styles.comment_user_image}
            />
            <div className={styles.user_info}>
              <span className={styles.comment_user_name}>Delphine</span>
              <span className={styles.comment_date}>01.27.2024</span>
            </div>
          </div>
          <p className={styles.user_comment}>Continue with your good work!</p>
        </div> */}
      </div>
    </div>
  );
};

export default Comment;

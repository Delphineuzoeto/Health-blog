"use client";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import styles from "./write.module.css";
import { useState } from "react";

const WritePage = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]); // prettier-ignore

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji.native);
    setCommentText((prevValue) => prevValue + emoji.native);

    setShowEmojiPicker(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setCommentText(event.target.value);
  };

  // to add new comment
  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      // add new comment
      setComments((prevComments) => [
        ...prevComments,
        {
          id: Date.now(),
          text: commentText,
        },
      ]);

      // clear the textrea after
      setCommentText("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sub_containers}>
        <h1>Tell us what you have in mind.</h1>
        <div className={styles.textarea_container}>
          <textarea
            cols={20}
            rows={2}
            placeholder="tell us what you have in mind.."
            name="write"
            value={commentText}
            className={styles._textarea}
            onChange={handleChange}
          />

          <button onClick={toggleEmojiPicker} className={styles.emojibtn}>
            😊
          </button>
        </div>
        {showEmojiPicker && (
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        )}

        <button
          type="submit"
          onClick={handleCommentSubmit}
          className={styles.write_btn}
        >
          comment
        </button>
        <div className={styles.comments}>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <div>
                <p className={styles.write_comment}>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* /no content */}
      <div className={styles.no_content}></div>
    </div>
  );
};

export default WritePage;

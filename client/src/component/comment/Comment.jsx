import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CommentComment from "./CommentComment";
import CommentCreate from "./CommentCreate";
import {url} from "../../configIp";

const Comment = ({ sort, activity, setActivity, id, onoff }) => {
  const [check, setCheck] = useState("false");
  const [content, setContent] = useState("");
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const getData2 = async () => {
      const comment = await axios({
        url: `${url}/${sort}Comment/${id}`,
        method: "GET",
      });
      setComment(comment.data);
    };

    getData2();
  }, [activity, id]);

  return (
    <>
      {comment.map((comment, index) => (
        <div key={index}>
          <hr />
          댓글 :{" "}
          {check === "true" + comment.commentId ? (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const data = await axios({
                  url: `${url}/${sort}CommentUpdate/${comment.commentId}`,
                  method: "PATCH",
                  data: { content },
                });
                if (data.data !== null) {
                  setActivity(activity + 1);
                  setCheck("false");
                  setContent("");
                  console.log("성공");
                } else {
                  console.log("오류");
                }
              }}
            >
              <input
                type="text"
                placeholder={comment.commentContent}
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></input>
              <div>
                <button type="submit">확인</button>
                <button onClick={(e) => {setContent(comment.commentContent)}}>취소</button>
              </div>
            </form>
          ) : (
            <div>{comment.commentContent}</div>
          )}
          {check === "true" + comment.commentId ? null : (
            <span
              className="cursor-pointer"
              onClick={(e) => {
                setCheck("true" + comment.commentId);
              }}
            >
              수정
            </span>
          )}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await axios({
                url: `${url}/${sort}CommentDelete/${comment.commentId}`,
                method: "POST",
              });
              setActivity(activity + 1);
            }}
          >
            <button>삭제</button>
          </form>
          <CommentComment
            sort={sort}
            id={id}
            comment={comment}
            activity={activity}
            setActivity={setActivity}
            onoff={onoff}
          />
        </div>
      ))}

      <CommentCreate
        sort={sort}
        activity={activity}
        setActivity={setActivity}
        id={id}
        onoff={onoff}
      />
    </>
  );
};

export default Comment;

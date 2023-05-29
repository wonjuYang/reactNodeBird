import { Form, Input, Button } from "antd";
import { useCallback } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText, id); // 저장해야함
  }, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button
          style={{ position: "absolute" }}
          type="primary"
          htmlType="submit"
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.prototypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;

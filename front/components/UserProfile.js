import { Avatar, Card, Button } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  });
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />8
        </div>,
        <div key="following">
          팔로잉
          <br />8
        </div>,
        <div key="follower">
          팔로워
          <br />8
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>tr</Avatar>} title="triplej" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;

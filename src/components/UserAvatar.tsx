import React from 'react';
import { Avatar } from 'antd';

interface UserAvatarProps {
  userLogin: string;
  avatarUrl: string;
  onClick: (login: string) => void;
}

export function UserAvatar({ userLogin, avatarUrl, onClick }: UserAvatarProps) {
  const onAvatarClick = () => onClick(userLogin);
  return (
    <div onClick={onAvatarClick}>
      <Avatar src={avatarUrl} />
    </div>
  );
}

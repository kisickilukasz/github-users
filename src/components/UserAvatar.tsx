import React from 'react';
import { Avatar } from 'antd';
import { AvatarWrapper } from './styled';

interface UserAvatarProps {
  userLogin: string;
  avatarUrl: string;
  onClick: (login: string) => void;
}

export function UserAvatar({ userLogin, avatarUrl, onClick }: UserAvatarProps) {
  const onAvatarClick = () => onClick(userLogin);
  return (
    <AvatarWrapper onClick={onAvatarClick}>
      <Avatar src={avatarUrl} />
    </AvatarWrapper>
  );
}

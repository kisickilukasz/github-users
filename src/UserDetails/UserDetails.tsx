import { useParams } from 'react-router-dom';
import * as React from 'react';

export function UserDetails() {
  const { userId } = useParams();
  return (
    <div>
      <h2>{userId}</h2>
    </div>
  );
}

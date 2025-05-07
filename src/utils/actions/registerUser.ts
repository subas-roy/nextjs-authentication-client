'use server';

import { UserData } from '@/app/register/page';

export const registerUser = async (data: UserData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
    cache: 'no-store', // Prevents caching of the response
  });

  const UserInfo = await res.json();

  return UserInfo;
};

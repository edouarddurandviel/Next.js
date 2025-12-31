'use client';
import { useAppDispatch } from 'edouard/storeSlices/hooks';
import { logout } from 'edouard/storeSlices/user/thunks';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { resetAction } from 'edouard/actions';

const LogoutPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetAction());
    dispatch(logout());
    redirect('/');
  }, [dispatch, redirect]);

  return;
};

export default LogoutPage;

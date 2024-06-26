import { useSuspenseQuery } from '@tanstack/react-query';
import { sessionQueries } from '~entities/session';
import { UserLayout } from '../user-layout/user-layout';
import { GuestLayout } from '../guest-layout/guest-layout';
import { Outlet } from 'react-router-dom';
import { Footer } from '~shared/components/footer/footer';

export function GenericLayout() {
  const { data } = useSuspenseQuery(sessionQueries.userService.queryOptions());

  return (
    <>
      {data ? <UserLayout /> : <GuestLayout />}
      <Outlet />
      <Footer />
    </>
  );
}

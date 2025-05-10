import {createRootRouteWithContext, Outlet} from '@tanstack/react-router';
import type {QueryClient} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools';
import Layout from '@/components/layout';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
    {
      component: RootComponent,
    },
);

function RootComponent() {
  return (
      <Layout>
        <Outlet/>
        <ReactQueryDevtools/>
        <TanStackRouterDevtools/>
      </Layout>
  );
}

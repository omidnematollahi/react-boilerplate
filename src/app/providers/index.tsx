import { withErrorBoundary } from 'react-error-boundary';
import { withSuspense } from '~shared/libs/react';
import { FullPageError } from '~shared/components/full-page-error';
import { Loader } from '~shared/components/loader';
import { QueryClientProvider } from './queryClientProvider';
import { BrowserRouter } from './routerProvider';

function Providers() {
  return (
    <QueryClientProvider>
      <BrowserRouter />
    </QueryClientProvider>
  );
}

const SuspensedProvider = withSuspense(Providers, {
  fallback: <Loader size="full" />,
});
export const Provider = withErrorBoundary(SuspensedProvider, {
  fallbackRender: ({ error }) => <FullPageError error={error} />,
});

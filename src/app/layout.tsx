import { type FC, type PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <main className="container flex flex-row min-h-screen justify-center mx-auto px-4 py-8 pt-20">
        {children}
      </main>
    </div>
  );
};

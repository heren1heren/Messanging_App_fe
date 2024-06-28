import { FC, ReactNode } from 'react';

type LayoutProps = { children: ReactNode };
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <p> layout stuff ..</p>
      <div>{children}</div>
    </>
  );
};
export default Layout;

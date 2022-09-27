import * as React from 'react';

type FooterWrapperProps = {
  children?: React.ReactNode;
}

const FooterWrapper: React.FC<FooterWrapperProps> = ({ children }) => {
  return (
    <div className="py-4 fixed left-0 bottom-0 w-full flex justify-center items-center">
      {children}
    </div>
  )
}

export default FooterWrapper

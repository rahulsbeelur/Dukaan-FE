import React, { ReactNode } from 'react';

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <div className="max-w-[1440px] max-h-[1482px] mx-auto ">{children}</div>;
};

export default Wrapper;

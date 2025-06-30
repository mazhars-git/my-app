import React, { ReactNode } from "react";
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default CommonLayout;

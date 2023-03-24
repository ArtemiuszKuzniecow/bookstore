import * as React from "react";
import { useNavigate } from "react-router-dom";

const NavigateWrapper = ({
  children,
  path,
}: {
  children: React.ReactNode | React.ReactNode[];
  path: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer" onClick={() => navigate(path)}>
      {children}
    </div>
  );
};

export default NavigateWrapper;

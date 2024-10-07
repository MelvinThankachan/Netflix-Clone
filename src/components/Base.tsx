import { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
};

const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <div className="w-screen flex flex-col items-center pb-20">
      <div className="absolute w-full h-full bg-[url('https://i.redd.it/zjgs096khv591.jpg')] bg-cover bg-center brightness-[0.30] -z-10"></div>
      {children}
    </div>
  );
};

export default Base;

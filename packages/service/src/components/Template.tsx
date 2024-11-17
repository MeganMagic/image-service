import { PropsWithChildren } from "react";

const Template = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-slate-200 w-screen h-screen sm:py-8">
      <div className="w-full max-w-[540px] min-w-80 h-full min-h-[720px] mx-auto bg-white sm:border sm:border-slate-300 sm:shadow-2xl sm:shadow-slate-400 sm:rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Template;

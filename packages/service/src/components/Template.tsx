import { PropsWithChildren } from "react";

const Template = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-slate-900 w-screen h-screen sm:py-8">
      <div className="w-full max-w-[540px] min-w-80 h-full min-h-[720px] mx-auto bg-white sm:border sm:border-slate-200 sm:rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Template;

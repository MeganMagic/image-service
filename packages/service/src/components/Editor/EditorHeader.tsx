import { useNavigate } from "react-router-dom";
import ProgressStepper from "../ProgressStepper";
import type { Step } from "../ProgressStepper";
import { useMemo } from "react";
import Header from "../Header";

interface EditorHeaderProps {
  title: string;
  stepIndex: number;
}

const EditorHeader = ({ title, stepIndex }: EditorHeaderProps) => {
  const navigate = useNavigate();

  const steps: Step[] = useMemo(
    () => [
      {
        index: 1,
        label: "이미지 업로드",
        onClick: () => {
          navigate("/editor/image-upload");
        },
      },
      {
        index: 2,
        label: "글씨 가리기",
        onClick: () => {
          navigate("/editor/drawing");
        },
      },
      {
        index: 3,
        label: "입력창 배치하기",
        onClick: () => navigate("/editor/text-input"),
      },
      {
        index: 4,
        label: "확인하기",
        onClick: () => navigate("/editor/text-input"),
      },
    ],
    [navigate]
  );

  return (
    <div className="w-full absolute top-0 left-0">
      <Header
        title={title}
        leftBarButtonItems={[
          {
            renderIcon: (options) => <span {...options}>취소</span>,
            onClick: () => console.log("취소"),
          },
        ]}
      />
      <div className="px-10 my-6">
        <ProgressStepper steps={steps} currentStepIndex={stepIndex} />
      </div>
    </div>
  );
  // return (
  //   <header className="header absolute top-0 left-0 w-full px-10 pt-6 pb-8">
  //     <p className="title text-center text-base font-semibold mb-4 text-slate-800">
  //       {title}
  //     </p>
  //     <ProgressStepper steps={steps} currentStepIndex={stepIndex} />
  //   </header>
  // );
};

export default EditorHeader;

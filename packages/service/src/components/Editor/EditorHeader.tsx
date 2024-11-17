import { useNavigate } from "react-router-dom";
import ProgressStepper from "../ProgressStepper";
import type { Step } from "../ProgressStepper";
import { useMemo } from "react";
import { Edit2, Layout, Move, Upload } from "react-feather";

interface EditorHeaderProps {
  title: string;
  stepIndex: number;
}

const EditorHeader = ({ title, stepIndex }: EditorHeaderProps) => {
  const navigate = useNavigate();

  const steps: Step[] = useMemo(
    () => [
      {
        index: 0,
        label: "이미지 업로드",
        onClick: () => {
          navigate("/editor/image-upload");
        },
        renderIcon: (options) => <Upload {...options} />,
      },
      {
        index: 1,
        label: "글씨 가리기",
        onClick: () => {
          navigate("/editor/drawing");
        },
        renderIcon: (options) => <Edit2 {...options} />,
      },
      {
        index: 2,
        label: "입력창 배치하기",
        onClick: () => navigate("/editor/text-input"),
        renderIcon: (options) => <Move {...options} />,
      },
      {
        index: 3,
        label: "확인하기",
        onClick: () => navigate("/editor/text-input"),
        renderIcon: (options) => <Layout {...options} />,
      },
    ],
    [navigate]
  );

  return (
    <header className="header absolute top-0 left-0 w-full p-6 pb-8">
      <p className="title text-center text-base font-semibold mb-4 text-slate-800">
        {title}
      </p>
      <ProgressStepper steps={steps} currentStepIndex={stepIndex} />
    </header>
  );
};

export default EditorHeader;

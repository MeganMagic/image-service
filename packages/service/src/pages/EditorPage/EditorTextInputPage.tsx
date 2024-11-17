import { useNavigate } from "react-router-dom";
import CTAButton from "../../components/CTAButton";
import EditorHeader from "../../components/Editor/EditorHeader";

const EditorTextInputPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <EditorHeader title="입력창 배치하기" stepIndex={2} />

      <div className="bottom absolute bottom-0 left-0 w-full flex flex-col">
        <div id="text-control-pad"></div>

        <div className="px-4 py-3">
          <CTAButton label="다음" onClick={() => navigate("/editor/preview")} />
        </div>
      </div>
    </>
  );
};

export default EditorTextInputPage;

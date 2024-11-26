import { useImageController } from "editor/controllers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditorHeader from "../../components/Editor/EditorHeader";
import CTAButton from "../../components/CTAButton";
import { Upload } from "react-feather";

const EditorImageUploadPage = () => {
  const [done, setDone] = useState(false);

  const { uploadImage } = useImageController();
  const navigate = useNavigate();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      // todo: handle error
      return;
    }
    // todo: editor에서 정보 받을 수 있도록 수정, uploadImage의 return 값이 현재 image state가 되도록 수정
    uploadImage(file);
    setDone(true);
  };

  return (
    <>
      <EditorHeader title="이미지 올리기" stepIndex={1} />

      {!done && (
        <div className="center absolute top-1/2 -translate-y-1/2 w-full h-[500px] bg-white flex justify-center items-center">
          <label>
            <input
              className="absolute w-0 h-0 border-0 p-0 overflow-hidden"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div className="w-44 h-11 flex gap-2 justify-center items-center rounded bg-slate-200 hover:active:bg-slate-300 transition-colors">
              <Upload className="text-slate-800 w-5 h-5" />
              <span className="text-base font-semibold text-slate-900">
                파일선택
              </span>
            </div>
          </label>
        </div>
      )}

      <div className="bottom absolute bottom-0 left-0 w-full flex justify-center px-4 py-3">
        <CTAButton
          label="다음"
          onClick={() => navigate("/editor/drawing")}
          disabled={!done}
          isFullWidth
        />
      </div>
    </>
  );
};

export default EditorImageUploadPage;

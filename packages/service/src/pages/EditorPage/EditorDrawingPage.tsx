import { useNavigate } from "react-router-dom";
import CTAButton from "../../components/CTAButton";
import EditorHeader from "../../components/Editor/EditorHeader";
import { useState } from "react";
import BottomSheet from "../../components/BottomSheet";
import { useDrawingController, useShapeController } from "editor/controllers";
import { throttle } from "lodash";

const EditorDrawingPage = () => {
  const navigate = useNavigate();
  const { color, width, changeColor, changeWidth } = useDrawingController();
  const { addShape } = useShapeController();

  const [isColorSheetOpen, setIsColorSheetOpen] = useState(false);
  const [isBrushSheetOpen, setIsBrushSheetOpen] = useState(false);
  const [isShapeSheetOpen, setIsShapeSheetOpen] = useState(false);

  const closeColorSheet = () => {
    setIsColorSheetOpen(false);
  };
  const closeBrushSheet = () => {
    setIsBrushSheetOpen(false);
  };
  const closeShapeSheet = () => {
    setIsShapeSheetOpen(false);
  };

  const addShapeHandler = (type: "RECTANGLE" | "ELLIPSE") => () => {
    addShape(type, color);
  };

  return (
    <>
      <EditorHeader title="글자 가리기" stepIndex={1} />

      <div className="bottom absolute bottom-0 left-0 w-full flex flex-col">
        <div className="pb-6 flex gap-2 justify-center">
          <button
            id="color-control"
            className="p-2 border"
            onClick={() => setIsColorSheetOpen(true)}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span>색상</span>
          </button>

          <button
            id="brush-control"
            className="p-2 border flex flex-col items-center"
            onClick={() => setIsBrushSheetOpen(true)}
          >
            <div
              className="rounded-full w-1 h-1 bg-emerald-600"
              style={{
                width: `${width}px`,
                height: `${width}px`,
              }}
            />
            <span>{width}px</span>
            <span>브러쉬</span>
          </button>

          <button
            id="shape-control"
            className="p-2 border"
            onClick={() => setIsShapeSheetOpen(true)}
          >
            도형 추가
          </button>
        </div>
        <div className="px-4 py-3">
          <CTAButton
            label="다음"
            onClick={() => navigate("/editor/text-input")}
          />
        </div>
      </div>

      {isColorSheetOpen && (
        <BottomSheet title="색상 선택" onClose={closeColorSheet}>
          <button onClick={() => changeColor("#dc2626")}>
            <div className="w-4 h-4 bg-red-600 rounded-full" />
            green
          </button>

          <button onClick={() => changeColor("#059669")}>
            <div className="w-4 h-4 bg-emerald-600 rounded-full" />
            green
          </button>
        </BottomSheet>
      )}

      {isBrushSheetOpen && (
        <BottomSheet title="브러쉬 선택" onClose={closeBrushSheet}>
          <span>브러쉬 모양 선택</span>

          <span>브러쉬 크기 선택</span>
          <input
            type="range"
            value={width}
            max={20}
            onChange={throttle((e) => changeWidth(Number(e.target.value)), 200)}
          />
        </BottomSheet>
      )}

      {isShapeSheetOpen && (
        <BottomSheet title="도형 추가" onClose={closeShapeSheet}>
          <button onClick={addShapeHandler("RECTANGLE")}>네모 추가</button>
          <button onClick={addShapeHandler("ELLIPSE")}>동그라미 추가</button>
        </BottomSheet>
      )}
    </>
  );
};

export default EditorDrawingPage;

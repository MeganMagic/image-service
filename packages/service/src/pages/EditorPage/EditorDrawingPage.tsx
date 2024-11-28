import { useNavigate } from "react-router-dom";
import CTAButton from "../../components/CTAButton";
import EditorHeader from "../../components/Editor/EditorHeader";
import { useState } from "react";
import BottomSheet from "../../components/BottomSheet";
import { useDrawingController, useShapeController } from "editor/controllers";
import { throttle } from "lodash";
import EditorShapeBottomSheet from "../../components/Editor/EditorShapeBottomSheet";
import EditorColorBottomSheet from "../../components/Editor/EditorColorBottomSheet";
import Button from "../../components/Button";
import { PlusCircle } from "react-feather";

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

  return (
    <>
      <EditorHeader title="글자 가리기" stepIndex={2} />

      <div className="bottom absolute bottom-0 left-0 w-full flex flex-col">
        <div className="pb-4 flex gap-2 justify-center">
          <Button
            name="color-control"
            className="w-20 h-20 flex-col gap-1"
            variant="outlined"
            onClick={() => setIsColorSheetOpen(true)}
          >
            <div
              className="w-10 h-10 rounded-lg"
              style={{ backgroundColor: color }}
            />
            <span className="text-xs text-slate-500">색상 선택</span>
          </Button>

          <Button
            name="brush-control"
            className="w-20 h-20 flex-col gap-1"
            variant="outlined"
            onClick={() => setIsBrushSheetOpen(true)}
          >
            <div className="w-5 h-5 flex justify-center items-center">
              <div
                className="rounded-full w-1 h-1"
                style={{
                  width: `${width + 1}px`,
                  height: `${width + 1}px`,
                  backgroundColor: color,
                }}
              />
            </div>
            <span className="text-xs text-slate-400">{width} px</span>
            <span className="text-xs text-slate-500">그리기</span>
          </Button>

          <Button
            name="shape-control"
            className="w-20 h-20 flex-col gap-1"
            variant="outlined"
            onClick={() => setIsShapeSheetOpen(true)}
          >
            <PlusCircle className="w-8 h-8 p-1" style={{ color }} />
            <span className="text-xs text-slate-500">도형 추가</span>
          </Button>
        </div>
        <div className="px-4 py-3">
          <CTAButton
            label="다음"
            isFullWidth
            onClick={() => navigate("/editor/text-input")}
          />
        </div>
      </div>

      {isColorSheetOpen && <EditorColorBottomSheet onClose={closeColorSheet} />}

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

      {isShapeSheetOpen && <EditorShapeBottomSheet onClose={closeShapeSheet} />}
    </>
  );
};

export default EditorDrawingPage;

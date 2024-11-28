import { useDrawingController, useShapeController } from "editor/controllers";
import BottomSheet from "../BottomSheet";

interface EditorShapeBottomSheetProps {
  onClose: () => void;
}

const EditorShapeBottomSheet = ({ onClose }: EditorShapeBottomSheetProps) => {
  const { addShape } = useShapeController();
  const { color } = useDrawingController();

  const addRectangle = () => {
    addShape("RECTANGLE", color);
    onClose();
  };

  const addEllipse = () => {
    addShape("ELLIPSE", color);
    onClose();
  };

  return (
    <BottomSheet title="도형 추가" onClose={onClose}>
      <div className="flex gap-7 px-1 py-3">
        <button onClick={addRectangle}>
          <div className="w-20 h-20 bg-slate-400" />
        </button>
        <button onClick={addEllipse}>
          <div className="w-20 h-20 bg-slate-400 rounded-full" />
        </button>
      </div>
    </BottomSheet>
  );
};

export default EditorShapeBottomSheet;

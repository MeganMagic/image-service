import { HexColorPicker } from "react-colorful";
import BottomSheet from "../BottomSheet";
import { useDrawingController } from "editor/controllers";
import { MapPin } from "react-feather";
import DebouncedColorPicker from "../DebouncedColorPicker";

interface EditorColorBottomSheet {
  onClose: () => void;
}

const EditorColorBottomSheet = ({ onClose }: EditorColorBottomSheet) => {
  const { color, changeColor } = useDrawingController();

  return (
    <BottomSheet title="색상 선택" onClose={onClose}>
      <div className="flex gap-4 mb-4">
        <div className="w-full border rounded flex p-3 gap-3 items-center">
          <div
            className="w-8 h-8 flex-shrink-0"
            style={{ background: color }}
          />
          <input className="w-full" value={color} />
        </div>
        <button className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full border border-slate-300">
          <MapPin className="text-slate-600" />
        </button>
      </div>

      <DebouncedColorPicker color={color} onChange={changeColor} />
    </BottomSheet>
  );
};

export default EditorColorBottomSheet;

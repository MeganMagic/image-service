import { PropsWithChildren, useRef } from "react";
import { useOnClickOutside } from "../utils/useOnClickOutside";

interface BottomSheetProps extends PropsWithChildren {
  title: string;
  onClose: () => void;
}

const BottomSheet = ({ title, children, onClose }: BottomSheetProps) => {
  const bottomSheetRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(bottomSheetRef, onClose);

  return (
    <div className="absolute w-full h-full z-50">
      <div className="bg-slate-900/10 w-full h-full" />

      <div
        ref={bottomSheetRef}
        className="w-full flex flex-col absolute bottom-0 bg-white rounded-t-md"
      >
        <div id="bottom-sheet-header" className="">
          <span>{title}</span>
        </div>
        <div id="bottom-sheet-content" className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;

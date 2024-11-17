declare module "editor" {
  import { ComponentType } from "react";

  interface EditorProps {
    mode: "none" | "drawing" | "shape";
  }

  const App: ComponentType<EditorProps>;
  export default App;
}

declare module "editor/controllers" {
  export const useShapeController: () => {
    addShape: (type: "RECTANGLE" | "ELLIPSE", color: string) => void;
  };

  export const useImageController: (onError?: (message: string) => void) => {
    uploadImage: (file: File) => void;
  };

  export const useDrawingController: () => {
    color: string;
    width: number;
    toolType: "pen" | "eraser";
    changeColor: (newColor: string) => void;
    changeWidth: (newWidth: number) => void;
    toggleToolType: () => void;
  };
}

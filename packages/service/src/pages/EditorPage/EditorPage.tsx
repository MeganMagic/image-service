import Editor from "editor";
import Resizer from "../../components/Resizer";
import { Outlet } from "react-router-dom";

const EDITOR_WIDTH = 1000;

const enum Step {
  IMAGE_UPLOAD,
  SHAPE,
  DRAWING,
}

const EditorPage = () => {
  return (
    <div className="p-10 h-full flex flex-col justify-center items-center relative">
      <Resizer className="w-full h-[500px]" targetWidth={EDITOR_WIDTH}>
        <Editor mode="none" />
      </Resizer>

      <Outlet />
    </div>
  );
};

export default EditorPage;

import { createBrowserRouter } from "react-router-dom";
import EditorPage from "./pages/EditorPage/EditorPage";
import EditorImageUploadPage from "./pages/EditorPage/EditorImageUploadPage";
import EditorDrawingPage from "./pages/EditorPage/EditorDrawingPage";
import EditorTextInputPage from "./pages/EditorPage/EditorTextInputPage";
import EditorPreviewPage from "./pages/EditorPage/EditorPreviewPage";

export default createBrowserRouter(
  [
    {
      path: "/editor",
      element: <EditorPage />,
      children: [
        {
          index: true,
          path: "/editor/image-upload",
          element: <EditorImageUploadPage />,
        },
        {
          path: "/editor/drawing",
          element: <EditorDrawingPage />,
        },
        {
          path: "/editor/text-input",
          element: <EditorTextInputPage />,
        },
        {
          path: "/editor/preview",
          element: <EditorPreviewPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

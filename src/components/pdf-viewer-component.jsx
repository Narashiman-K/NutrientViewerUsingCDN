// src/components/pdf-viewer-component.jsx
import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;

      const { NutrientViewer } = window;
      if (container && NutrientViewer) {
        NutrientViewer.load({
          licenseKey: import.meta.env.VITE_lkey,
          container,
          document: props.document,
          toolbarItems: [
            ...NutrientViewer.defaultToolbarItems,
            { type: "content-editor" },
          ],
        });
      }

      return () => {
        NutrientViewer?.unload(container);
      };
    }, [props.document]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}

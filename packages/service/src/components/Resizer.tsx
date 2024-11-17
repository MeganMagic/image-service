import {
  HtmlHTMLAttributes,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import debounce from "lodash/debounce";

interface ResizerProps
  extends PropsWithChildren,
    HtmlHTMLAttributes<HTMLDivElement> {
  targetWidth: number;
}

const Resizer = ({ children, className, targetWidth }: ResizerProps) => {
  const resizerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    const { current: resizer } = resizerRef;
    if (!resizer) return;

    const debouncedHandler = debounce((entry: ResizeObserverEntry) => {
      const { width } = entry.contentRect;
      const _scale = width / targetWidth;
      setScale(_scale);
    }, 200);

    const resizeObserver = new ResizeObserver((entries) =>
      debouncedHandler(entries[0])
    );
    resizeObserver.observe(resizer);

    return () => resizeObserver.disconnect();
  }, [resizerRef]);

  return (
    <div ref={resizerRef} className={className}>
      <div
        className="origin-top-left"
        style={{ transform: `scale(${scale.toFixed(2)})` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Resizer;

import debounce from "lodash/debounce";
import { useCallback, useEffect, useMemo, useState } from "react";
import { HexColorPicker } from "react-colorful";

interface DebouncedColorPicker {
  color: string;
  onChange: (newColor: string) => void;
}

const DebouncedColorPicker = ({ color, onChange }: DebouncedColorPicker) => {
  const [value, setValue] = useState(color);

  const debouncedChange = useMemo(() => debounce(onChange, 200), [onChange]);

  useEffect(() => {
    debouncedChange(value);
    return () => debouncedChange.cancel();
  }, [value, debouncedChange]);

  return <HexColorPicker color={value} onChange={setValue} />;
};

export default DebouncedColorPicker;

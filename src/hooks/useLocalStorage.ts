import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type DataWatchedProps from "../interface/DataWatched";

export function useLocalStorageState(
  initialState: DataWatchedProps[],
  key: string,
): [DataWatchedProps[], Dispatch<SetStateAction<DataWatchedProps[]>>] {
  const [value, setValue] = useState<DataWatchedProps[]>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}

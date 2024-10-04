import { useEffect } from "react";

export function useKeyListener(key, action) {
  return useEffect(() => {
    const handleButtonEscape = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        // Jika menekan tombol Escape di keyboard, maka akan mentriger function onCloseMovieDetail()
        // Ini akan membuat selectedId menjadi null kembali
        action();
        console.log("Close");
      }
    };
    document.addEventListener("keydown", handleButtonEscape);
    return () => {
      document.removeEventListener("keydown", handleButtonEscape);
    };
  }, [action, key]);
}

import { useEffect } from "react";
import { metaData } from "../assets/assets";

function useTitle({ title }: { title: string }) {
  useEffect(() => {
    window.document.title = `${title} | ${metaData.name}`;
    return () => {};
  }, []);
}

export default useTitle;

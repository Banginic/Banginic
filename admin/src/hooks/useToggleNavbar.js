import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";



function useToggleNavbar() {
  const { setShowNavbar } = useContext(AppContext);
  const [scroll, setScroll] = useState(false);

  function handleScroll() {
    setScroll(!scroll);
  }
  useEffect(() => {
    const offSet = pageYOffset;
    if (offSet > 500) {
      setShowNavbar(true);
    }
    if (offSet < 5) {
      setShowNavbar(false);
    }
  }, [scroll]);

  document.addEventListener("scroll", handleScroll);
}

export default useToggleNavbar;

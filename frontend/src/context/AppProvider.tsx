import React, { createContext, useContext, useEffect, useState } from "react";
import { WorkContext } from "./WorkProvider";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface User{
  fullName:string,
  email:string,
  phone:string,
  password:string
}
export interface AppContextType {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSideBar(): void;
  removeAllDisplay(): void;
  theme: "light" | "dark" | string;
  toggleTheme(): void;
  showNavbar: boolean,
  showSidebar: boolean;
  baseUrl:string;
  user:User;
  setUser: React.Dispatch<React.SetStateAction< User | null>>;
  navigate: NavigateFunction
}

export const AppContext = createContext<AppContextType | undefined>();

type PropsType = {
  children: React.ReactNode;
};

function AppProvider({ children}: PropsType) {
 
  const navigate = useNavigate()
  const baseUrl = import.meta.env.VITE_BASE_URL
  const workContext = useContext(WorkContext);
 const [ user, setUser ] = useState<User | null>(null)
  const [ showNavbar, setShowNavbar ] = useState(false)
  const [ toggleNavbar, setToggleNavbar ] = useState(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [theme, setTheme] = useState<"dark" | "light" | string>('');
  const [ token, setToken ] = useState(() =>localStorage.getItem('token') || null)

  const storedTheme = localStorage.getItem('theme')
  const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  //  CHECK FOR PREFERS THEME
  function themeFunction(){
    document.documentElement.classList.toggle('dark', 
      storedTheme === 'dark' || (!storedTheme && preferedTheme)
    )
  }
  function toggleTheme() {
    if (storedTheme && storedTheme === "dark") {
    setTheme('light')
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.toggle("dark");
    } else {
    setTheme('dark')
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.toggle("dark");
    }
  }
  
  useEffect(() => {
   themeFunction()
  }, []);

  //  STORE THEME TO LOCAL STORAGE ON CHANGE
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    currentTheme ? setTheme(currentTheme) : setTheme("dark");
  }, [theme]);

  function toggleSideBar() {
    console.log('toggler');
    setShowSidebar(!showSidebar);
  }
  const removeAllDisplay = () => {
    if (showSidebar) {
      setShowSidebar(false);
    }
    workContext?.handleRenderDetails();
    
  };
  document.addEventListener("scroll", () => {
    setShowSidebar(false)
    setToggleNavbar(prev => !prev)
    
  });
  useEffect(() => {
    const offSet = pageYOffset;
    removeAllDisplay()
    if (offSet < 5) {
      return setShowNavbar(false);
    }
    if (offSet > 500) {
      return setShowNavbar(true);
  }
  }, [toggleNavbar]);

  const values = {
    showSidebar,
    setShowSidebar,
    toggleSideBar,
    removeAllDisplay,
    theme,
    toggleTheme,
    showNavbar,
    baseUrl,
    user, setUser,
    navigate
    
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppProvider;

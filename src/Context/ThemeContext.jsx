import { createContext, useEffect, useState } from "react";

export const CourseContext = createContext();
export const CourseProvider = ({ children }) => {
  const [courseLevel, setCourseLevel] = useState("");
  const [courseSelected, setCourseSelected] = useState();
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [theme, setTheme] = useState(true);
 const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
);

  const login = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };
 const logout = () => {
  setIsLoggedIn(false);
  localStorage.removeItem("isLoggedIn");
};
useEffect(() => {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  setIsLoggedIn(loggedIn);
}, []);

  const handleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    if (!theme) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  const selectCourse = (courseName) => {
    setCourseSelected(courseName);
    setTriggerAnimation(true);
  };
  const selectLevel = (levelName) => {
    setCourseLevel(levelName);
  };

  return (
    <CourseContext.Provider
      value={{
        login,
        logout,
        isLoggedIn,
        theme,
        setTheme,
        handleTheme,
        courseLevel,
        setCourseLevel,
        selectLevel,
        selectCourse,
        courseSelected,
        setCourseSelected,
        triggerAnimation,
        setTriggerAnimation,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

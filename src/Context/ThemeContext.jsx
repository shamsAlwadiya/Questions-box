import { createContext, useState } from "react";

export const CourseContext = createContext();
export const CourseProvider =({children})=>{
    const [courseLevel ,setCourseLevel] =useState("");
    const [courseSelected , setCourseSelected]=useState();
    const [triggerAnimation , setTriggerAnimation]=useState(false);
    const selectCourse =(courseName )=>{
        setCourseSelected(courseName);
        setTriggerAnimation(true);
        

    }
    const selectLevel =(levelName )=>{
        setCourseLevel(levelName);
    }
    return( 
        <CourseContext.Provider value={{ courseLevel , setCourseLevel ,selectLevel, selectCourse ,courseSelected,setCourseSelected ,triggerAnimation ,setTriggerAnimation}}>
            {children}
        </CourseContext.Provider>
    )
}
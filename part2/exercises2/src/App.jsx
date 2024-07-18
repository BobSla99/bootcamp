//Ejemplo donde se muestran los coursos con un componente que a su ves tienen subcomponnente
import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import GetTotal from "./components/GetTotal";
import ShowCourse from "./components/ShowCourse";

function App() {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  

  return (
    <>
      <Header course={courses[0].name} />
      <Content course={courses[0]} />
      <GetTotal course={courses[0]} />
      <ShowCourse course={courses[0]} />
      {
        courses.map(course=><ShowCourse course={course} />)
      }
    </>
  );
}

export default App;

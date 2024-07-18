const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  console.log(props.course);
  const parts = props.course.parts;

  let arrParts = parts.map((part) => (
    <p>
      {part.name} {part.exercises}
    </p>
  ));
  console.log(arrParts);
  return (
    <>
      {/* {arrParts} */}
      {parts.map((part) => (
        <p key={part.id}>
          {" "}
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};

const GetTotal = ({ course }) => {
  const parts = course.parts;
  const total = parts.reduce((acu, part) => acu + part.exercises, 0);
  console.log(total);

  return (
    <>
      <h4>Total of {total} exercises</h4>
    </>
  );
};

const ShowCourse = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content course={course} />
      <GetTotal course={course} />


    </>
  );
};

export default ShowCourse;

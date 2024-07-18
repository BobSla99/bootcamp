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

export default Content;

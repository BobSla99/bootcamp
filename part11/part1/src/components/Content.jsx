const Content = (props) => {
  const [part1, part2, part3] = props.course.parts;

  return (
    <>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </>
  );
};

export default Content;

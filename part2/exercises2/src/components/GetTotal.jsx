


const GetTotal = ({ course }) => {
  
    const parts = course.parts;
    const total=parts.reduce((acu,part)=>acu+part.exercises,0)
    console.log(total)


    return (
        <>
            <h4>Total of {total} exercises</h4>
        </>
    )
};

export default GetTotal
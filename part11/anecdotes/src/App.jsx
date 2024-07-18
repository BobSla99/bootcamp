import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(0);
  const [ratings, setRatings] = useState(new Array(8).fill(0));
  const [mostRated, setMostRated] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const getMostRate = () => {
    let temp = 0;
    let updated = false;
    // debugger
    console.log("el largo de ratings es ", ratings.length);
    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i] > ratings[mostRated]) {
        temp = i;
        updated = true;
      }
    }
    console.log("El index con mas rating es el ", temp);
    if (updated) setMostRated(temp);
    console.log("The most voted is ", mostRated);
  };

  const anecdoteHandler = () => {
    const lastIndex = selected;
    let index = Math.floor(Math.random() * anecdotes.length);
    while (index === lastIndex) {
      index = Math.floor(Math.random() * anecdotes.length);
    }
    console.log("randon index generated ", index);
    setSelected(index);
    console.log("ratings", ratings, "\n");

    getMostRate();
  };

  const ratingHandler = () => {
    console.log("selected", selected, "rating actual es", ratings);
    const newRatings = [...ratings];
    newRatings[selected] = newRatings[selected] + 1;
    console.log("new ratings", newRatings);
    console.log("el largo de ratings es ", ratings.length);
    console.log(newRatings, "este es el new ratings");
    setRatings(newRatings);
    console.log("el largo de ratings es ", ratings.length);

    getMostRate();
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {ratings[selected]} votes</p>
      <button onClick={ratingHandler}>vote</button>
      <button onClick={anecdoteHandler}>Next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostRated]}</p>
    </>
  );
}

export default App;

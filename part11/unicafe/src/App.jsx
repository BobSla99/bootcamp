import { useState } from "react";

//Components
const Header = () => {
  return <h1>give feedback</h1>;
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const Statistic = (props) => {
  console.log(props);
  const { bad, good, neutral, positive, all, average } = props.votes;
  console.log(bad, neutral, good);

  if (bad + neutral + good === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <>
        <table border={"true"}>
          <thead>
            <tr>
              <th>statistic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad </td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{all}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{positive}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
};

function App() {
  const [votes, setVotes] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
    all: 0,
    average: 0,
    positive: 0,
  });

  //Funtions

  const handleGood = () => {
    console.log(votes);
    const goodVotesUpdated = votes.good + 1;
    const newVotes = {
      ...votes,
      good: goodVotesUpdated,
      all: goodVotesUpdated + votes.bad + votes.neutral,
    };
    setVotes(newVotes);
  };

  const handleBad = () => {
    const badVoteUpdated = votes.bad + 1;
    const newVotes = {
      ...votes,
      bad: badVoteUpdated,
      all: badVoteUpdated + votes.bad + votes.neutral,
    };
    setVotes(newVotes);
  };

  const handleNeutral = () => {
    const neutralVotesUpdated = votes.neutral + 1;
    const newVotes = {
      ...votes,
      neutral: neutralVotesUpdated,
      all: neutralVotesUpdated + votes.good + votes.bad,
    };
    setVotes(newVotes);
  };
  console.log(votes);
  return (
    <>
      <Header />
      <Button text="good" onClick={handleGood} />
      <Button text="Neutral" onClick={handleNeutral} />
      <Button text="Bad" onClick={handleBad} />
      <Statistic votes={votes} />
    </>
  );
}

export default App;

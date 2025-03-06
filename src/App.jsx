import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setbestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    (async () => {
      let url = `https://api.giphy.com/v2/emoji?api_key=FUe0U1CXi8P3HHqECsUuHKOHFSFIqZS0&limit=25&offset=0`;
      let response = await fetch(url);
      let res = await response.json();
      setData(res.data);
    })();
  }, []);

  const shuffleCards = () => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    setData(shuffledData);
  };

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      let newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setbestScore(newScore);
      }
      setClickedCards([...clickedCards, id]);
    }
    shuffleCards();
  };

  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <div className="display-score">
          <p>Score - {score}</p>
          <p>Best Score - {bestScore}</p>
        </div>
      </header>
      <p className="game-info">
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      {data && data.length > 0 ? (
        <div className="img-container">
          {data.map((elem) => (
            <div
              className="card-container"
              key={elem.id}
              onClick={() => handleCardClick(elem.id)}
            >
              <Card imgSrc={elem.images.original.url} imgTitle={elem.title} />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;

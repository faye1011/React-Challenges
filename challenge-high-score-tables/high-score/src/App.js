import logo from "./logo.svg";
import "./App.css";
import data from "./scores.js";
import Country from "./Country";
function App() {
  function createIndividualCountryScores() {
    let score = data.scores;
    console.log(score);

    return data.map(function (country, i) {
      for (let i = 0; i < score.length; i++)
        return (
          <Country
            country={country.name}
            score={score[i].n}
            person={score[i].s}
          />
        );
    });
  }

  return (
    <div className="App">
      <div className="country-lists">{createIndividualCountryScores()}</div>
    </div>
  );
}

export default App;

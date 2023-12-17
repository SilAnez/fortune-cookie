import { useState } from "react";
import "./App.css";
import getRandomFromArray from "./utils/getRandomFromArray";
import phrases from "./utils/phrases.json";
import Phrase from "./components/Phrase";
import Button from "./components/Button";
import arrPhotos from "./utils/photos.json"

function App() {
  const initialPhrase = getRandomFromArray(phrases);
  const initialPhoto = getRandomFromArray(arrPhotos);
  const [quoteRandom, setquoteRandom] = useState(initialPhrase);
  const [photoRandom, setPhotoRandom] = useState(initialPhoto);
  const objStyle = {
    backgroundImage: `url(/fondo${photoRandom}.jpg)`,
  };
  return (
    <div className="app" style={objStyle}>
      <h1 className="app__title">Galleta de la Fortuna</h1>
      <div className="app__card">
        <Phrase quoteRandom={quoteRandom} />
        <Button 
          setquoteRandom={setquoteRandom} 
          setPhotoRandom={setPhotoRandom}    
        />
      </div>

    </div>
  );
}
export default App;

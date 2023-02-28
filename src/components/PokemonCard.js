import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {
  const {id, name, hp, sprites} = poke
  const {front, back} = sprites
  const [isFront, setIsFront] = useState(true)

  function handleDelete(e){
    console.log("Goodbye", e.target.value)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={((e) => setIsFront(!isFront))} src={isFront? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
        <button onClick={handleDelete} value={`#${id}  ${name}`} >Delete Pokemon</button>
      </div>
    </Card>
  );
}

export default PokemonCard;

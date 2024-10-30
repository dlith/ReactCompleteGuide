import {useState} from "react";

export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(true);
  }

  let playername;
  if (isEditing) {
    playername = <input type="text" className="player-name" required/>;
  } else {
    playername = <span className="player-name">{name}</span>;
  }

  return (
    <li>
      <span className="player">
        {playername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>Edit</button>
    </li>
  );
}

import {useState} from "react";

export default function Player({initialName, symbol}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" className="player-name" required value={playerName} onChange={handleChange} />
    );
  } else {
    editablePlayerName = <span className="player-name">{playerName}</span>;
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

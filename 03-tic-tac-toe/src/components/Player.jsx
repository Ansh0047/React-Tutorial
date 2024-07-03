import { useState } from "react";


// IMT Note: When we are using a component React will create the new isolated instance and changes to it,
// will not affect the other componets on reusing it.
export default function Player({name,symbol}) {
    // setting initial value to false
    const [isEditing, setIsEditing] = useState(false);

    // function to change the state if we are editing or not
    function handleEditClick(){
      setIsEditing(true);
    }
    
    // initially player name is rendered and if edit button is clicked set the content to input to get the name
    let content = <span className="player-name">{name}</span>;
    if(isEditing){
      content = <input type="text"></input>;
    }

  return (
    <li>
      <span className="player">
        
        {content}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* as we have to edit the name of the player and after changing the name the ui should be same 
      so we "useState" for this that whether the button gets clicked or not*/}
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}

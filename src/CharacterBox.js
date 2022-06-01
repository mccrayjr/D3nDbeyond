import React, { useContext } from 'react';
import { charContext } from './Provider';
import cloneDeep from 'lodash/cloneDeep'


export const CharacterBox = () =>{
  const charState = useContext(charContext);
  const characters = charState.state;
  let turnCharacter = {}
  characters.forEach(element => {
    if(element.isTurn){
      turnCharacter = element;
    }
  });

  if(turnCharacter.monsterData){
    console.log("this is the monsterData", turnCharacter.monsterData.actions)
  }


  return(
    <div>
    {turnCharacter.name ? (
    <div class='columns is-vcentered'>
        <div class='column is-one-third is-offset-one-third'>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title is-centered">
              {`Current Turn: ${turnCharacter.name}`}
              </p>
            </header>
            <div class="card-content">
              <p>{`Status: ${turnCharacter.status[0] || "none"}`}</p><br></br>
              <p>{`Initiative: ${turnCharacter.initiative}`}</p><br></br>
              <p>{`Health: ${turnCharacter.health}`}</p><br></br>
            {turnCharacter.monsterData ? (
                <p>{`Actions: ${turnCharacter.monsterData.actions.map(action => `${action.name} `)}`}</p>
            ) : (<div></div>) }
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Save</a>
              <a href="#" class="card-footer-item">Edit</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>
          </div>
      </div>
    </div> ) : <div></div>}
  </div>

  )
}

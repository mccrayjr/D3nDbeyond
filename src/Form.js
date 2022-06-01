import React, { useState, useContext } from 'react';
import { charContext } from './Provider';
import { Character, Monster } from './Classes';

export function Form() {
  //useContext gives us acess to the state that we passed down through Provider
  const charState = useContext(charContext);
  const { dispatch } = charState;
  //useState takes an initial value and returns 1.) a variable 2.) a function to set the value of that variable
  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState(0);


  //This is a helper function to add our characters from the form into our state (characters array)
  const handleSubmitCharacter = () => {
    //alert('Characters are a-happening!');
    const character =  new Character(name, initiative);
    dispatch({ type: 'ADD_CHAR', value: character });
    console.log(charState);
    setName('');
    setInitiative(0);
  };

  //@todo Add Error handling with try/catch
  const handleSubmitMonster = async () => {
    //alert('Monsters are a-happening!');

    const monsterInfo = await fetch(`https://www.dnd5eapi.co/api/monsters/${name.toLocaleLowerCase().split(' ').join('-')}/`);
    const monsterInfoJson = await monsterInfo.json()

    console.log(monsterInfoJson)

    const character = await  new Monster(name, initiative, 0, [], monsterInfoJson);
    dispatch({ type: 'ADD_CHAR', value: character });
    console.log(charState);
    setName('');
    setInitiative(0);
  };

  //not done
  const handleTurn = () => {
    //console.log('handling turn in form component');
    dispatch({ type: 'CHANGE_TURN' });
  };

  return (
    <div class='columns is-vcentered'>
      <div class='column is-one-third is-offset-one-third'>
        <div>
          <label>
            <input
              class='input'
              type='text'
              value={name}
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              class='input'
              type='number'
              value={initiative}
              onChange={(e) => setInitiative(e.target.value)}
            />
          </label>
          <div class='column is-4 is-offset-5'>
          <button class='button is-primary' onClick={() => {handleSubmitCharacter()}}>
            Character
          </button>
        </div>
          <div class='column is-4 is-offset-5'>
          <button class='button is-primary' onClick={() => {handleSubmitMonster()}}>
             Monster
          </button>
        </div>
        </div>
        <div class='column is-4 is-offset-5'>
          <button class='button is-danger' onClick={handleTurn}>
              Turn
          </button>
        </div>
      </div>
    </div>
  );
}

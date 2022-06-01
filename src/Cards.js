import React, { useContext } from 'react';
import { charContext } from './Provider';


export const Cards = () => {
  const charState = useContext(charContext);
  //we can access our array of characters on the state property of charContext vvv
  const characters = charState.state;
  const { dispatch } = charState;

  const handleDelete = (character) => {
    console.log("in handle delete", character)
    dispatch({type: 'REMOVE_CHARACTER', value: character})
  }

  //may use this for the modal but idk
  const [open, setOpen] = React.useState("");
  const handleOpen = () => setOpen(" is-active");
  const handleClose = () => setOpen("");

  // in our return we have conditional logic that says: if Characterss exists iterate over the array and render boxes w/ each character's info; if Characters does NOT exist render and empty div
  return (
    <div>
      {characters ? (
        <div class='columns is-multiline'>

          {characters.map((character, i) => (
            <div key={i}>
              {!character.isTurn ? (
                <div class='column is-narrow'>
                  <div class='box' style={{ width: '200px' }}>
                    <article class='media'>
                      <div class='media-content'>
                        <p key={i} class='bd-notification is-primary'>
                          {character.name} {character.initiative}
                        </p>
                      </div>
                      <div class='media-left'>
                        <figure class='image is-32x32'>
                          <img
                            src='https://bulma.io/images/placeholders/128x128.png'
                            alt='Image'
                          ></img>
                        </figure>
                      </div>
                      <div><button class="delete is-small right" onClick={() => handleDelete(character)}></button></div>
                    </article>
                    <br></br>
                    <button
                      onClick={handleOpen}
                      class='button is-small is-fullwidth'
                    >
                      Status
                    </button>
                    <div class={`modal${open}`}>
                      <div class="modal-background"></div>
                        <div class="modal-card">
                          <header class="modal-card-head">
                            <p class="modal-card-title">{`${character.name}`}</p>
                            <button class="delete" onClick={handleClose} aria-label="close"></button>
                          </header>
                          <section class="modal-card-body">
                            {`Charcter: ${character.name}`}
                          </section>
                          <footer class="modal-card-foot">
                            <button class="button is-success">Save changes</button>
                            <button class="button">Cancel</button>
                          </footer>
                        </div>
                        </div>
                  </div>
                </div>
              ) : (
                <div class='column is-narrow'>
                  <div
                    class='box'
                    style={{ width: '200px', background: '#FF33CA' }}
                  >
                    <article class='media'>
                      <div class='media-content'>
                        <p key={i} class='bd-notification is-primary'>
                          {character.name} {character.initiative}
                        </p>
                      </div>
                      <div class='media-left'>
                        <figure class='image is-32x32'>
                          <img
                            src='https://bulma.io/images/placeholders/128x128.png'
                            alt='Image'
                          ></img>
                        </figure>
                      </div>
                      <div><button class="delete is-small right" onClick={() => handleDelete(character)}></button></div>
                    </article>
                    <br></br>
                    <button
                      onClick={handleOpen}
                      class='button is-small is-fullwidth'
                    >
                      Status
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}{' '}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

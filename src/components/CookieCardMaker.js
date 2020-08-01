import React from 'react';

const CookieCardMaker = () => {
  return (
    <div>
      <form>
        <section>
          <label htmlFor="recipe-name">Recipe name:</label>
            <div className="recipe-name-input-box">
              <input id="recipe-name" type="text" required/>
            </div>
        </section>

        <section>
          <label htmlFor="recipe-ingredients"> Recipe ingredients:</label>
            <div className="recipe-ingredients-input-box">
              <textarea id="recipe-ingredients" rows="5" cols="33" required />
            </div>
        </section>

        <section>
        <label htmlFor="recipe-steps">Recipe steps:</label>
        <div className="recipe-steps-input-box">
        <textarea id="recipe-steps" rows="5" cols="33" required />
        </div>
        </section>

        <input value="Create Card! :)" type="submit"/>
      </form>
    </div>
  )
}

export default CookieCardMaker;

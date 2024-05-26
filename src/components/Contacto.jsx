import React from 'react';

const Contacto = () => {
  return (
    <div>
      <h1><i className="fas fa-phone"></i>Contacto</h1>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required placeholder='Benisoit Fils Delsonne'/>
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder='benisoit.fils@gmail.com' />
        <br />
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required placeholder='tout bagay ok mwen felisite nou pou bon travaysa nap fe a'></textarea>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;

import React, { useState } from 'react';

const Hook = () => {
  const [somadata, setNumber] = useState(10);

  return (
    <div>
      <div>
        <h1>Valor = {somadata}</h1>
        <button onClick={() => setNumber(somadata+10)}>Alterar</button>
      </div>
    </div>
  );
};

export default Hook;

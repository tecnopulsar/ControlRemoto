import React, { useEffect } from 'react';

function KeyboardComponent() {
  const handleKeyDown = event => {
    console.log('Tecla presionada:', event.key);
  };

  useEffect(() => {
    // Agregar el event listener para 'keydown' al montar el componente
    document.addEventListener('keydown', handleKeyDown);

    // Eliminar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // El array vacío asegura que el effect se ejecute solo en el montaje y desmontaje

  return (
    <div>
      <p>Presiona una tecla en la ventana para ver el evento del teclado.</p>
    </div>
  );
}

export default KeyboardComponent;

// Tu arreglo de objetos
let canalesDirecTV = {
  Deportes: [
    {
      ch_654: {
        name: "DEPORTV",
        nro: "654",
        favorite: false,
        show: true,
      },
    },
    {
      ch_610: {
        name: "DSPORTS",
        nro: "610",
        favorite: false,
        show: true,
      },
    },
    {
      ch_612: {
        name: "DSPORTS 2",
        nro: "612",
        favorite: false,
        show: true,
      },
    },
  ],
  Favoritos: [
    {
      ch_610: {
        name: "DSPORTS",
        nro: "610",
        favorite: false,
        show: true,
      },
    },
  ],
};
const nro = "654";
let Favoritos = canalesDirecTV.Favoritos;
console.log(Favoritos);

// Iterar a través de cada objeto en el arreglo
canalesDirecTV["Deportes"].forEach((canal) => {
  // Obtener la clave (por ejemplo, "ch_654") y el objeto correspondiente
  const [clave, objeto] = Object.entries(canal)[0];

  // Modificar la propiedad "favorite"
  if (objeto.nro === nro) {
    objeto.favorite = true; // Cambia este valor según tus necesidades
    Favoritos = [...Favoritos, canal];
  }
});

// console.log(canalesDirecTV);
console.log(Favoritos);

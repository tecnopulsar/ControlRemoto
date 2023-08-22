import { createContext } from "react";

export const stateControlInit = {
  proveedor:'TVLatino',
  valBtnPress: "",
  listPress: [],
  command: [],
  commandSended: false, //El command[] fue enviado?
  feedback:'',
  ledEmitting: false, //Luz testigo control remoto
  config:{
    ledFlashing:1000,
  }
};

const StateContext = createContext(stateControlInit);

export default StateContext;

import { createContext } from "react";

export const stateControlInit = {
  btnPress: "",
  listPress:[],
  modeSecuence: true,   //admite canales de hasta 4 numeros
  sendCommand: []
};

const StateContext = createContext();

export default StateContext;

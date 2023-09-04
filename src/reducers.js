import { legacy_createStore as createStore } from "redux";
import { NOT_EKLE } from "./actions";
import { NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(s10chLocalStorageKey, data) {
  localStorage.setItem(s10chLocalStorageKey, JSON.stringify(data));
}

function localStorageStateOku(s10chLocalStorageKey) {
  return JSON.parse(localStorage.getItem(s10chLocalStorageKey));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}

export function reducer(state = baslangicDegerleri, action) {
  switch (action.type) {
    case NOT_EKLE:
      const newState = { ...state, body: action.payload };
      return newState;

    case NOT_SIL:
      const newStateRem = {
        ...state,
        body: state.body.filter((item) => item.key !== action.payload),
      };
      return newStateRem;

    default:
      return state;
  }
}

export const store = createStore(reducer);

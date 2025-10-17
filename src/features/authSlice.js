// Importa la funzione createSlice da Redux Toolkit, che semplifica la creazione di slice (stato + reducers + azioni)
import { createSlice } from '@reduxjs/toolkit';

// Definisce lo stato iniziale per lo slice di autenticazione.
// In questo caso manteniamo solamente un campo "token" inizialmente vuoto.
const initialState = {
  token: '', // token di autenticazione (stringa); vuoto quando l'utente non è loggato
};

// Crea lo slice chiamato "auth" usando createSlice.
// createSlice prende un nome, uno stato iniziale e un oggetto di reducers (funzioni che modificano lo stato).
const authSlice = createSlice({
  name: 'auth',        // nome identificativo dello slice nello store Redux
  initialState,        // stato iniziale definito sopra

  // Oggetto che contiene i reducers: funzioni che definiscono come lo stato cambia in risposta ad azioni
  reducers: {
    // Reducer "login": genera un token casuale e lo salva nello stato.
    // Non riceve payload; genera internamente una stringa casuale.
    login: (state) => {
      const randomToken = Math.random().toString(36).substring(2); // genera una stringa casuale come token
      state.token = randomToken; // salva il token nello stato (Redux Toolkit usa Immer quindi la mutazione è sicura)
    },

    // Reducer "logout": pulisce il token impostandolo a stringa vuota.
    // Usato per effettuare il logout dell'utente.
    logout: (state) => {
      state.token = ''; // rimuove il token dallo stato, segnando l'utente come non autenticato
    },
  },
});

// Estrae ed esporta le azioni create automaticamente (login e logout).
// Potrai usarle con dispatch(login()) e dispatch(logout()) nei componenti.
export const { login, logout } = authSlice.actions;

// Esporta il reducer generato dallo slice come export di default.
// Questo reducer va collegato allo store (es. configureStore) per essere usato dall'app.
export default authSlice.reducer;

// Importa la funzione createSlice da Redux Toolkit, che serve per creare slice di stato in modo semplice
import { createSlice } from "@reduxjs/toolkit";

// Definisce lo stato iniziale dell'utente con campi vuoti
const initialState = {
    firstName: '', // Nome dell'utente
    lastName: '',  // Cognome dell'utente
    email: '',     // Email dell'utente
    password: '',  // Password dell'utente
};

// Creazione della slice 'user' usando createSlice
const userSlice = createSlice({
    name: 'user',        // Nome della slice, utile per il logging e per Redux DevTools
    initialState,        // Stato iniziale definito sopra
    reducers: {          // Oggetto dei reducer, cioè le funzioni che modificano lo stato
        // Funzione per registrare un utente, prende i dati dall'action.payload
        registerUser: (state, action) => {
            const {firstName, lastName, email, password} = action.payload; // Destructuring dei dati passati
            state.firstName = firstName; // Aggiorna il nome nello stato
            state.lastName = lastName;   // Aggiorna il cognome nello stato
            state.email = email;         // Aggiorna l'email nello stato
            state.password = password;   // Aggiorna la password nello stato
        },
        // Funzione per resettare lo stato utente a valori vuoti
        clearUser: (state) => {
            state.firstName = ''; // Resetta il nome
            state.lastName = '';  // Resetta il cognome
            state.email = '';     // Resetta l'email
            state.password = '';  // Resetta la password
        },
    },
});

// Esporta le azioni generate automaticamente da createSlice
export const {registerUser, clearUser} = userSlice.actions;

// Esporta il reducer della slice, da usare nel store di Redux
export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';


//qui costruiamo un oggetto con le chiavi e il valore per il login
const initialState = {
     firstname: '',
     lastname: '',
     email: '',
     password: '',
};
 //creiamo uno "slice" di redux chiamato user
 // uno slice è una sezione dello stato globale dell app, con le sue regole per modificarlo
const userSlice = createSlice({
     name: 'user',
     initialState,
     reducers: {
          setUser: (state, action) => {
               const { firstname, lastname, email, password } = action.payload;
               state.name = name || "";
               

          }
     }
})

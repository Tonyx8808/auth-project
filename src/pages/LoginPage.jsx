import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "../components/ParticlesBackground"; // 🌌 Sfondo animato

function LoginPage() {
  // 🔹 Stati locali per gestire i campi del form e gli errori
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔹 Redux: otteniamo i dati utente e la funzione di dispatch
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // 🔹 Hook per navigare tra le pagine
  const navigate = useNavigate();

  // 🔹 Gestione del submit del form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica che email e password corrispondano a quelli registrati in Redux
    if (
      email === user.email &&
      password === user.password &&
      email !== "" &&
      password !== ""
    ) {
      dispatch(login()); // Genera un token casuale e lo salva in Redux (authSlice)
      navigate("/profile"); // Reindirizza alla pagina profilo
    } else {
      setError("Invalid email or password."); // Mostra errore se i dati non corrispondono
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* 🔹 Sfondo animato futuristico */}
      <ParticleBackground />

      {/* 🔹 Contenuto principale sopra lo sfondo */}
      <div className="relative z-10 w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96 border border-cyan-500/30"
        >
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6 drop-shadow-[0_0_10px_#00ffff]">
            LOGIN
          </h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Messaggio di errore */}
          {error && (
            <p className="text-red-400 text-center mb-4 font-semibold">
              {error}
            </p>
          )}

          {/* Bottone di login */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 rounded-lg shadow-md shadow-cyan-400/30 transition-all"
          >
            LOGIN
          </button>

          {/* Link per registrarsi */}
          <p className="mt-4 text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Register here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

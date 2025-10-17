import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "../components/ParticlesBackground"; // 🌌 Sfondo animato futuristico

function ProfilePage() {
  // 🔹 Otteniamo i dati dell’utente e il token da Redux
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);

  // 🔹 Hook Redux e React Router
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 🔹 Logout → azzera token e torna alla pagina di login
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-black text-white overflow-hidden">
      {/* 🔹 Sfondo animato futuristico */}
      <ParticleBackground />

      {/* 🔹 Contenuto principale sopra lo sfondo */}
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-cyan-500/30 w-96">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6 drop-shadow-[0_0_10px_#00ffff]">
          PROFILE
        </h2>

        {/* Dati utente */}
        <div className="space-y-3 text-gray-200">
          <p>
            <strong className="text-cyan-400">First Name:</strong>{" "}
            {user.firstName || "—"}
          </p>
          <p>
            <strong className="text-cyan-400">Last Name:</strong>{" "}
            {user.lastName || "—"}
          </p>
          <p>
            <strong className="text-cyan-400">Email:</strong>{" "}
            {user.email || "—"}
          </p>
          <p>
            <strong className="text-cyan-400">Token:</strong>{" "}
            {token ? (
              <span className="break-all text-cyan-300">{token}</span>
            ) : (
              <span className="text-red-400">No token</span>
            )}
          </p>
        </div>

        {/* Bottone Logout */}
        <button
          onClick={handleLogout}
          className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 rounded-lg shadow-md shadow-cyan-400/30 transition-all"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;

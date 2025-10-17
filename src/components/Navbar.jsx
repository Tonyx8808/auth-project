import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-2xl font-bold text-cyan-400"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Auth Project
      </motion.h1>

      <ul className="flex space-x-6">
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/" className="hover:text-cyan-400 transition-colors">
            Register
          </Link>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/login" className="hover:text-cyan-400 transition-colors">
            Login
          </Link>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/profile" className="hover:text-cyan-400 transition-colors">
            Profile
          </Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;

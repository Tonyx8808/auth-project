import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
    return(
        <motion.footer
        className="mt-20 w-full bg-black bg-opacity-80 text-cyan-300 text-center py-4 border-t border-cyan-400"
             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
             transition={{ duration: 1.5 }}
            >
                <p className="tracking-widest text-sm neon-text">
                    © {new Date().getFullYear()} CyberAuth Project | Powered by <span className="text-cyan-100">Redux Toolkit</span>
                </p>
        </motion.footer>
    );
}
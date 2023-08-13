"use client";

import { motion } from "framer-motion";

export function ModalEventText(): JSX.Element {
    return (
        <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed right-10 bottom-10 bg-white rounded-lg shadow-md z-40 "
        >
            <div className="p-8">
                <div>Товар добавлен в список избранного!</div>
            </div>
        </motion.div>
    );
}

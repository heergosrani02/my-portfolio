import { useEffect, useState } from "react";
import cursorCss from "./Cursor.module.css";

import { motion } from "motion/react";

function Cursor(){
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, [])  

    const cursorVariant = {
        move: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 7,
            mixBlendMode: "difference",
            damping: 400,
            stiffness: 400,
        }
    }

    return(
        <>
            <motion.div className={cursorCss.cursor} variants={cursorVariant} animate="move"></motion.div>
        </>
    )
}

export default Cursor;
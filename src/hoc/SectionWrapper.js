// import { motion } from "framer-motion"

// import { styles } from "../styles"
// import { staggerContainer } from "../utils/motion"


// // function/component SectionWrapper calls another function
// const SectionWrapper = (Component, idName) =>
//     function HOC() {
//         return (
//             <motion.section
//                 variants={staggerContainer()}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{once: true, amount: 0.25}}
//                 className={`${styles.padding} max-w-7xl mx-auto relative z-0`}

//             >
//                 <span className="hash-span" id={idName}>
//                     &nbsp;

//                 </span>
//                 <Component />
//             </motion.section>
//         )
// }

// export default SectionWrapper

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Higher-order function that returns a functional component
const SectionWrapper = (Component, idName) => {
    return function HOC() {
        return React.createElement(
            motion.section,
            {
                variants: staggerContainer(),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.25 },
                className: `${styles.padding} max-w-7xl mx-auto relative z-0`,
            },
            React.createElement("span", { className: "hash-span", id: idName }, " "),
            React.createElement(Component)
        );
    };
};

export default SectionWrapper;


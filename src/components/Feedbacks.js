// import { motion } from "framer-motion"
// import { styles } from "../styles"
// import { SectionWrapper } from "../hoc"
// import { fadeIn, textVariant } from "../utils/motion"
// import { testimonials } from "../constants"


// const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.5)}
//     className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
//   >
//     <p className="text-white font-black text-[48px]">"</p>
//     <div className="mt-1">
//       <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
//       <div className="mt-7 flex justify-between items-center gap-1">
//         <div className="flex-1 flex flex-col">
//           <p className="text-white font-medium text-[16px]">
//             <span className="pink-text-gradient">@</span> {name}
//           </p>
//           <p className="mt-1 text-secondary text-[12px]">
//             {designation} at {company}
//           </p>

//         </div>
//         <img
//           src={image}
//           alt={`feedback-by-${name}`}
//           className="w-10 h-10 object-cover rounded-full"
//         />
//       </div>
//     </div>
    
//   </motion.div>

// )

// const Feedbacks = () => {
//   return (
//     <div className="mt-12 bg-black-100 rounded-[20px]">
//       <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>
//             What others say about me
//           </p>
//           <h2 className={styles.sectionHeadText}>
//             Testimonials.
//           </h2>
          
//         </motion.div>

//       </div>
//       <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard
//             key={testimonial.name}
//             index={index}
//             {...testimonial}
//           />
//         ))}

//       </div>
//     </div>
//   )
// }

// export default SectionWrapper(Feedbacks,"")


import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  return React.createElement(
    motion.div,
    {
      variants: fadeIn("", "spring", index * 0.5, 0.5),
      className: "bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    },
    React.createElement("p", { className: "text-white font-black text-[48px]" }, "\""),
    React.createElement(
      "div",
      { className: "mt-1" },
      React.createElement("p", { className: "text-white tracking-wider text-[18px]" }, testimonial),
      React.createElement(
        "div",
        { className: "mt-7 flex justify-between items-center gap-1" },
        React.createElement(
          "div",
          { className: "flex-1 flex flex-col" },
          React.createElement("p", { className: "text-white font-medium text-[16px]" },
            React.createElement("span", { className: "pink-text-gradient" }, "@"), 
            " ", name
          ),
          React.createElement("p", { className: "mt-1 text-secondary text-[12px]" },
            designation, " at ", company
          )
        ),
        React.createElement("img", {
          src: image,
          alt: `feedback-by-${name}`,
          className: "w-10 h-10 object-cover rounded-full"
        })
      )
    )
  );
};

const Feedbacks = () => {
  return React.createElement(
    "div",
    { className: "mt-12 bg-black-100 rounded-[20px]" },
    React.createElement(
      "div",
      { className: `${styles.padding} bg-tertiary rounded-2xl min-h-[300px]` },
      React.createElement(motion.div, { variants: textVariant() },
        React.createElement("p", { className: styles.sectionSubText }, "What others say about me"),
        React.createElement("h2", { className: styles.sectionHeadText }, "Testimonials.")
      )
    ),
    React.createElement(
      "div",
      { className: `${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7` },
      testimonials.map((testimonial, index) =>
        React.createElement(FeedbackCard, {
          key: testimonial.name,
          index: index,
          ...testimonial
        })
      )
    )
  );
};

export default SectionWrapper(Feedbacks, "");

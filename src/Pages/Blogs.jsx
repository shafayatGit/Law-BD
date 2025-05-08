import React from "react";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { fadeInRight } from "../Components/MotionVarients";

// import { useLoaderData, useParams } from "react-router";

const Blogs = () => {
  return (
    <div className="mulish flex flex-col gap-12 px-5">
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className=" font-bold text-5xl text-center mt-20">Blogs</h1>
        <p className=" font-normal text-xl text-center mb-22">
          Let's explore some basic concept that will make me a good developer{" "}
        </p>
      </motion.div>
      {/* 1st Qns */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className=" font-semibold text-2xl">
          What is useState and how does it work in React?
        </h1>
        <p className=" font-normal text-[18px] mt-3">
          <span className="text-green-600 font-medium text-[20px] ">
            Answer: <br />
          </span>
          useState is a React Hook that lets you add and manage state (like
          variables that change) inside a functional component. It works by
          returning a state value and a function to update it, causing the
          component to re-render when the state changes.
        </p>
      </motion.div>
      {/* 2nd Qns */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className=" font-semibold text-2xl">
          What is the purpose of useEffect in React?
        </h1>
        <p className=" font-normal text-[18px] mt-3">
          <span className="text-green-600 font-medium text-[20px] ">
            Answer: <br />
          </span>
          The useEffect hook in React lets you run side effects in your
          components, like fetching data, updating the DOM, or setting up
          timers. It runs after the component renders and can be controlled to
          run only when certain values change.
        </p>
      </motion.div>
      {/* 3rd Qns */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className=" font-semibold text-2xl">
          What is a custom hook in React and when should you use one?
        </h1>
        <p className=" font-normal text-[18px] mt-3">
          <span className="text-green-600 font-medium text-[20px] ">
            Answer: <br />
          </span>
          A custom hook in React is a reusable function that starts with use and
          lets you extract and share logic between components. You should use
          one when you have repeated logic (like fetching data or handling form
          input) that you want to keep clean and organized across components.
        </p>
      </motion.div>
      {/* 4th Qns */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className=" font-semibold text-2xl">
          Difference between controlled and uncontrolled components. Which one
          is better?
        </h1>
        <p className=" font-normal text-[18px] mt-3">
          <span className="text-green-600 font-medium text-[20px] ">
            Answer: <br />
          </span>
          A controlled component in React has its form data managed by React
          state, while an uncontrolled component stores its data directly in the
          DOM using refs. Controlled components give more control and are easier
          to validate, so they are generally preferred for complex forms.
        </p>
      </motion.div>
      {/* 5th Qns */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-36"
      >
        <h1 className=" font-semibold text-2xl">
          Tell us something about useFormStatus() in React.
        </h1>
        <p className=" font-normal text-[18px] mt-3">
          <span className="text-green-600 font-medium text-[20px] ">
            Answer: <br />
          </span>
          useFormStatus() is a React hook (used with Server Actions or forms in
          frameworks like Next.js) that lets you check the current status of a
          form—like whether it's submitting. It's helpful for showing loading
          indicators or disabling buttons while the form is being processed.
        </p>
      </motion.div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;

import React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";

const AnimatedOutlet = () => {
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={true}>
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default AnimatedOutlet;
import React, { useEffect, useState } from "react";

import Tracks2Desktop from "./Tracks2Desktop";
import Tracks2Mobile from "./Tracks2Mobile";

function App() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1000);

  useEffect(() => {
    // Update the isWideScreen state when the window is resized
    function handleResize() {
      setIsWideScreen(window.innerWidth > 1000);
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isWideScreen ? <Tracks2Desktop /> : <Tracks2Mobile />}</div>;
}

export default App;

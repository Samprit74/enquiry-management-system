import React, { useState } from "react";
import Enquery from "./Enquery";
import Splash from "./Splash";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div>
      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <Enquery />
      )}
    </div>
  );
};

export default App;

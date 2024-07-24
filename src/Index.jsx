{
  /** Images */
}
import HopeLogo1 from "./assets/newlogo.png";

import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate as Navigate } from "react-router";

function Index() {
  const [slidesStarted, setSlidesStarted] = useState(false);
  const getStartedNew = () => {
    setSlidesStarted(!slidesStarted);
    console.info(slidesStarted);
    Navigate("/slide:id");
  };
  return (
    <>
      <div className="m-auto">
        {" "}
        {/* Assuming you want a link to the root path */}
        <img src={HopeLogo1} className="logo" alt="Hope Logo" />
      </div>
      <h1 className="m-5 text-align-center">Cree Lighting Training</h1>
      <Button variant="primary" onClick={getStartedNew}>
        Get Started
      </Button>
    </>
  );
}
export default Index;

import { useParams } from "react-router-dom";

function Slide() {
  const { id } = useParams(); // Destructure id from useParams

  // Use the id prop for rendering or logic within Slide
  return (
    <div>
      Slide with ID: {id} {/* Display the captured ID */}
    </div>
  );
}
export default Slide;

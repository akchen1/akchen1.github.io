import React from 'react'
import {Link} from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import "../styles/ProjectDetails.css"
import { useLocation } from "react-router-dom";

export const ProjectDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  
  const title = location.state?.details.Title;
  const summary = location.state?.details.Summary;
  const playUrl = location.state?.details.GamePath;
  const images = location.state?.details.Images;
  return (
    <div className="project-description-container">
      <h2>{title}</h2>
      <p>{summary}</p>
      
      <ImageGallery items={images} />

      <h3>My Contributions</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis blandit purus nec tempus. Praesent eget scelerisque dui, eget placerat nisi. Proin a sapien a urna rhoncus condimentum quis eget nisi. Nam blandit, enim vitae tincidunt dictum, felis dui rhoncus neque, ut suscipit purus mi in dolor. Praesent eu fermentum tortor. Cras sollicitudin ipsum sit amet vestibulum rutrum. Phasellus non pharetra nulla, at faucibus nulla. In pellentesque pulvinar leo et pellentesque. Etiam aliquam porta dolor, sit amet interdum sem lacinia eget. Maecenas rhoncus nec nibh a tincidunt. Integer id felis nec enim pellentesque vulputate. Aliquam mi lorem, convallis vitae ultricies vitae, vestibulum eu ante. Mauris id lobortis arcu. Curabitur mattis, est in tincidunt gravida, neque diam sollicitudin mi, non efficitur tellus nulla in nisl. Donec egestas ut sem in vulputate.</p>


      <button className="project-description-button" role="button" onClick={() =>
                window.open(playUrl, "_blank")}>Try Game!</button>
      {/* <Link
        to={playUrl}
        // to={`/unityproject/${title}/play`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Play
      </Link> */}
    </div>
  )
}

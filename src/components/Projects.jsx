import { Fragment } from "react";

export default function Projects({ existingInfo }) {
  const mappedProjects = existingInfo.map((project, index) => {
    return (
      <Fragment key={project}>
        <label htmlFor={index}>Project Title</label>
        <input
          id={index}
          type="text"
          value={project.tile}
          className="editProjectsInput"
        ></input>
        <label htmlFor={project.link}>Project Link</label>
        <input
          id={project.link}
          type="text"
          value={project.link}
          className="editProjectsInput"
        ></input>
        <label htmlFor={project.description}>Project Description</label>
        <textarea
          id={project.description}
          value={project.description}
          className="editProjectsInput"
        ></textarea>
      </Fragment>
    );
  });
  return (
    <form action="#" method="post" className="editProjectsBox">
      {mappedProjects}
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
}

// {
//   title:
//     "Humpback Whale Calling Behavior: A Study In Acoustic Ecology And Noise",
//   link: "humpback-whale-calling.project",
//   description:
//     "Humpback whales (Megaptera novaeangliae) are a widely distributed baleen whale species, well known for their diverse acoustic behavior. On high-latitude foraging grounds, humpback whales produce a suite of non-song vocalizations (“calls”) in concert with foraging and social behavior. In this dissertation I investigated the role of calls in the acoustic ecology of humpback whales in Ireland and the potential impacts of vessel noise on humpback whale calling behavior in this region.",
// },
// {
//   title: "Remote sensing of penguin populations",
//   link: "penguin-remote-sension.project",
//   description:
//     "Five penguin species breed in Antarctica: emperors, Adélies, chinstraps, gentoos and macaronis. These are important Antarctic mid-trophic level predators and under predicted climate change are believed threatened. Accurate monitoring of populations is therefore of growing importance owing to the changing environment in which they live, particularly on the Western Antarctic Peninsula where rapid warming is occurring.",
// },
// ]);

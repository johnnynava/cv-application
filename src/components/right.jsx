/* eslint-disable react/prop-types */
// const [personalDetails, editPersonalDetails] = useState({
//   fullName: "Alana Smith",
//   job: "Marine Biologist",
//   email: "alana.smith@example.com",
//   phone: "0781058X220",
//   location: "Dingle, Ireland",
//   linkedIn: "linkedin.com/in/URL",
//   website: "alana.smith.marine",
//   github: "github.com/dummyuser",
// });

// const [summary, editSummary] = useState(
//   "I'm a marine biologist with 5 years of experience researching humpback whales. I have a passion for what I do and I'm open to opportunities which let me grow as a person and a professional",
// );

// const [skills, editSkills] = useState([
//   "Whales",
//   "Sea Turtles",
//   "Dolphins",
//   "Sea snakes",
//   "Sharks",
//   "Octopi",
//   "Squids",
//   "Seals",
//   "Tuna",
//   "Penguins",
//   "Manatees",
//   "Plankton",
// ]);

// const [education, setEducation] = useState({
//   university: "University of Southampton",
//   degree: "BSc Marine Biology",
//   years: "2014-2018",
// });

// const [projects, setProjects] = useState([
//   {
//     title:
//       "Humpback Whale Calling Behavior: A Study In Acoustic Ecology And Noise",
//     link: "humpback-whale-calling.project",
//     description:
//       "Humpback whales (Megaptera novaeangliae) are a widely distributed baleen whale species, well known for their diverse acoustic behavior. On high-latitude foraging grounds, humpback whales produce a suite of non-song vocalizations (“calls”) in concert with foraging and social behavior. In this dissertation I investigated the role of calls in the acoustic ecology of humpback whales in Ireland and the potential impacts of vessel noise on humpback whale calling behavior in this region.",
//   },
//   {
//     title: "Remote sensing of penguin populations",
//     link: "penguin-remote-sension.project",
//     description:
//       "Five penguin species breed in Antarctica: emperors, Adélies, chinstraps, gentoos and macaronis. These are important Antarctic mid-trophic level predators and under predicted climate change are believed threatened. Accurate monitoring of populations is therefore of growing importance owing to the changing environment in which they live, particularly on the Western Antarctic Peninsula where rapid warming is occurring.",
//   },
// ]);

// const [employment, setEmployment] = useState([
//   {
//     position: "Senior Whale Researcher",
//     company: "University of Galway",
//     years: "Sep 2020 - Present",
//     location: "Galway, Ireland",
//     description: [
//       "Provide high-level care to whales around the region of Dingle.",
//       "Write and update scientific articles to share technical expertise internally and externally.",
//       "Handle multiple investigations and prioritize tasks based on whales needs.",
//       "Maintain excellent communication with different parties including project status, plan-of-actions, and resolution steps",
//     ],
//   },
//   {
//     position: "Whale Researcher",
//     company: "University of Galway",
//     years: "Sep 2019 - Aug 2020",
//     location: "Galway, Ireland",
//     description: [
//       "Update and create whale documentation and work in migration projects for injured whales.",
//       "Work on community requests that include analysis, change, incident and problem management (whale special care).",
//     ],
//   },
//   {
//     position: "Junior Whale Researcher",
//     company: "University of Galway",
//     years: "Jul 2018 - Jul 2019",
//     location: "Galway, Ireland",
//     description: [
//       "Delivered high-level support to whale researchers.",
//       "Led field investigators on dispatches of whale investigations, including trouble isolation and whale health checks",
//       "Worked along various parties (university researches, private companies and volunteers) in research meetings in order to isolate and solve complex whale problems.",
//     ],
//   },
//   {
//     position: "Junior Cetacean Investigator",
//     company: "University of Florida",
//     years: "Jul 2018 - Jul 2019",
//     location: "Florida, United States",
//     description: [
//       "Responsibilities included: whale and dolphin monitoring, researcher user management, tracking devices configuration and whale migrations, change tracking devices and create tracking groups.",
//       "Initiative on the following projects: fixed security and performance issues in the tracking devices, improved tracking devices convergence time by +22%, increased bandwidth (with link aggregation) between tracking devices.",
//     ],
//   },
// ]);

export default function Right({
  personalDetails,
  summary,
  skills,
  education,
  projects,
  employment,
}) {
  let mappedSkills = skills.map((skill, index) => {
    <li key={index}>{skill}</li>;
  });
  return (
    <div className="right">
      <div className="personalDetails">
        <div className="personalDetailsLeft">
          <p className="fullName">{personalDetails.fullName}</p>
          <p className="jobTitle">{personalDetails.job}</p>
          <p className="summaryTitle">Summary</p>
        </div>
        <div className="personalDetailsRight">
          <div>
            <img src="../assets/email.svg"></img>
            <p>{personalDetails.email}</p>
          </div>
          <div>
            <img src="../assets/phone.svg"></img>
            <p>{personalDetails.phone}</p>
          </div>
          <div>
            <img src="../assets/location.svg"></img>
            <p>{personalDetails.location}</p>
          </div>
          <div>
            <img src="../assets/linkedin.svg"></img>
            <p>{personalDetails.linkedIn}</p>
          </div>
          <div>
            <img src="../assets/website.svg"></img>
            <p>{personalDetails.website}</p>
          </div>
          <div>
            <img src="../assets/github.svg"></img>
            <p>{personalDetails.github}</p>
          </div>
        </div>
      </div>
      <div className="summary">{summary}</div>
      <div className="skills">
        <ul>{mappedSkills}</ul>
      </div>
      <div className="education"></div>
      <div className="projects"></div>
      <div className="employment"></div>
    </div>
  );
}

// skills (array of strings)

// education.university;
// education.degree;
// education.years;

//projects (array of objects)
//projects[0].title
//projects[0].link
//projects[0].description

//employment (array of objects)
//employment[0].position
//employment[0].company
//employment[0].years
//employment[0].location
//employment[0].description

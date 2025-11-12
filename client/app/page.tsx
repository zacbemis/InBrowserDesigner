import type { Metadata } from "next";
import Timeline, { type Experience } from "./components/timeline";
import Projects, { type Project } from "./components/projects";
import {
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiC,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSpring,
  SiOpengl,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiDocker,
  SiAmazon,
  SiLinux,
} from "react-icons/si";
import ecaMobile from "./public/assets/ECAMobile.png";
import carRepair from "./public/assets/CarRepair.png";
import climbingApp from "./public/assets/climbingApp.png";
import spotlight from "./public/assets/Spotlight.png";
import diamondMan from "./public/assets/diamondMan.png";
import gameOfLife from "./public/assets/gameOfLife.png";
import pythonML from "./public/assets/pythonML.png";
import CSUS from "./public/assets/CSUS.png";

export const metadata: Metadata = {
  title: "Home | Zac Bemis",
  description:
    "Welcome to Zac Bemis's portfolio. Explore my projects, experience timeline, and technical skills in software engineering.",
};

// Sample experience data - replace with your actual experiences
const experiences: Experience[] = [
  {
    id: 1,
    image: CSUS,
    title: "Bachelor of Science, Computer Science",
    company: "California State University, Sacramento",
    date: "Aug 2022 - Dec 2026",
    description:
      "Studied computer science at California State University, Sacramento and maintained a 3.5 GPA. Member of the Data Structures and Algorithms club and climbing club.",
  },
  {
    id: 2,
    image: ecaMobile,
    title: "Software Engineer Intern",
    company: "M28 Global, Inc.",
    date: "Jan 2025 - Aug 2025",
    description:
      "Led a project developing a financial planning app for the web, increasing projected user growth by 50%. Engineered secure, scalable features with Node.js, Express, TypeScript, React, MongoDB, and JWT authentication, delivering an MVP 2 weeks ahead of schedule. Partnered with the client and team in an Agile workflow to iterate on user flows and refine product direction, resulting in 20% more efficient user flow.",
  },
];

// Sample project data - replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    image: carRepair,
    title: "Car Repair App",
    description:
      "Directed a team of 5 engineers in an Agile environment, establishing the development workflow, Git strategy, and code review process to streamline collaboration. Implemented server-side rendering, reducing load times by 40% and improving user experience. Utilized JWT authentication, allowing for stateless user management and improved scalability.",
    githubUrl:
      "https://github.com/alirdin30/CSC-131-Pit-Stop-Programmers-Spring-2025",
  },
  {
    id: 2,
    image: climbingApp,
    title: "SystemBoard",
    description:
      "Designed a scalable architecture capable of reliably serving thousands of concurrent users. Integrated and optimized a Node.js server, speeding up API response times by 25%.",
    websiteUrl: "https://systemboard.io",
  },
  {
    id: 3,
    image: spotlight,
    title: "Spotlight CLI",
    description:
      "Created a CLI in Go to communicate with a local LLM through the Ollama API. Automated LLM workflows and file management with Bash scripts, improving developer efficiency by 10%.",
    githubUrl: "https://github.com/zacbemis/Spotlight",
  },
  {
    id: 4,
    image: diamondMan,
    title: "Diamond-Man Platformer",
    description:
      "Developed a game engine for a 2D platformer in Java, tested by 50+ users. Utilized OOP design principles to create player controls, a scoring system, and collision detection.",
    githubUrl: "https://github.com/zacbemis/Java2DGame",
  },
  {
    id: 5,
    image: gameOfLife,
    title: "Game of Life",
    description:
      "Implemented Conway's Game of Life in Java using TDD, OOP/OOD principles and real time GPU rendering through the use of OpenGL. This resulted in a performant renderer which allowed for real time updates on a 1000 by 1000 grid.",
    githubUrl: "https://github.com/zacbemis/GAME_OF_LIFE",
  },
  {
    id: 6,
    image: pythonML,
    title: "Stock Market Predictor",
    description:
      "Implemented machine learning algorithms like random forest and linear regression in Python using Scikit-learn, NumPy, and Pandas to forecast stock trends with visual insights from Matplotlib and Seaborn. Increased model accuracy by 10% through iterating feature sets and combining and optimizing ML algorithms.",
    githubUrl: "https://github.com/zacbemis/VFA",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* About Section */}
      <section
        id="about"
        className="flex min-h-screen items-center justify-center px-4 py-20"
      >
        <div
          className="w-full max-w-4xl rounded-3xl border border-white/20 px-8 py-10 shadow-lg sm:px-12 sm:py-14"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <h1 className="text-center text-2xl uppercase tracking-[0.2em] text-white/90 sm:text-3xl">
            Zac Bemis
          </h1>

          <div className="my-6 h-px w-full bg-white/20" />

          <p className="text-left text-base leading-relaxed text-white/80 sm:text-lg">
            I am a software engineer and computer science student at California
            State University, Sacramento. Software engineering gives me the
            outlet to be creative and solve problems in an ever expanding field.
            I also love studying philosophy, math, and physics. In my spare time
            I enjoy reading, rock climbing, and cycling.
          </p>

          <div className="my-6 h-px w-full bg-white/20" />

          <h3 className="mb-4 text-center text-lg uppercase tracking-[0.15em] text-white/90 sm:text-xl">
            Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Java", Icon: SiOpenjdk },
              { name: "Python", Icon: SiPython },
              { name: "JavaScript", Icon: SiJavascript },
              { name: "TypeScript", Icon: SiTypescript },
              { name: "Go", Icon: SiGo },
              { name: "C", Icon: SiC },
              { name: "React", Icon: SiReact },
              { name: "Next.js", Icon: SiNextdotjs },
              { name: "Node.js", Icon: SiNodedotjs },
              { name: "React Native", Icon: SiReact },
              { name: "Spring Boot", Icon: SiSpring },
              { name: "OpenGL", Icon: SiOpengl },
              { name: "MongoDB", Icon: SiMongodb },
              { name: "PostgreSQL", Icon: SiPostgresql },
              { name: "SQLite", Icon: SiSqlite },
              { name: "Git", Icon: SiGit },
              { name: "Docker", Icon: SiDocker },
              { name: "AWS", Icon: SiAmazon },
              { name: "Linux", Icon: SiLinux },
            ].map(({ name, Icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white sm:px-4 sm:py-2"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                }}
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        className="flex min-h-screen flex-col items-center justify-center px-4 py-20"
      >
        <Timeline experiences={experiences} />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="flex min-h-screen flex-col items-center justify-center px-4 py-20"
      >
        <Projects projects={projects} />
      </section>
    </main>
  );
}

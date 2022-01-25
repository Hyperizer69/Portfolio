import styles from "../styles/Skel.module.css";
import OT from "../components/orange-text";
import ProjectItem from "../components/project-item";
import Link from "next/link";
import { motion } from "framer-motion";
import SkelScaffold from "../components/skel-scaffold";

export default function Projects() {
  return (
    <SkelScaffold
      unaccentedText="my"
      accentedText="projects"
      toGo="/contact"
      child={ProjectsContent}
    />
  );
}

function ProjectsContent() {
  return (
    <>
      <motion.p
        className={styles.contentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Some of my projects are:
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ position: "relative" }}
        className={styles.contentDiv}
      >
        <div className={styles.projectsHolder}>
          <ProjectItem
            name="hyougen"
            link="https://github.com/Hyperizer69/CAF"
            description="a caf based kernel for RMX1851"
            language="TypeScript"
            languageColor="#2b7489"
          />
        </div>
        <div className={styles.bottomFade} />
      </motion.div>

      <motion.p
        className={styles.contentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        There&lsquo;s more on my{" "}
        <Link href="https://github.com/Hyperizer69" passHref>
          <a>
            <OT>github</OT>
          </a>
        </Link>{" "}
        account! Some of my work is on organisations where I work with other
        people.
      </motion.p>
    </>
  );
}

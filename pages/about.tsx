import styles from "../styles/Skel.module.css";
import { motion } from "framer-motion";
import OT from "../components/orange-text";
import SkelScaffold from "../components/skel-scaffold";

export default function About() {
  return (
    <SkelScaffold
      unaccentedText="about"
      accentedText="me"
      toGo="/projects"
      child={AboutContent}
    />
  );
}

function AboutContent() {
  return (
    <>
      <motion.p
        className={styles.contentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I&lsquo;m a from <OT>India</OT>, and I like making useful things!
        <br />
        <br />
        In my free time, I learn <OT>Japanese</OT> and play the{" "}
        <OT>keyboard</OT>
        {" and "}
        the <OT>guitar</OT>, although I&lsquo;m incredibly rusty at it now.
        <br />
        <br />
        And oh, I like <OT>cats</OT>!<br />
      </motion.p>
      <div className={styles.bottomFade} />
    </>
  );
}

import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import AnimatedTitle from "../../AnimatedTitle";
import Navigation from '../Navigation';

export default function Header({contact}) {
  const attributes = !isMobile && {
    initial: { opacity: 0, x: "-50" },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 }
  };
  return (
    <section className="header">
      <Navigation />
      <div className="header__text-box">
        {isMobile ? (
          <h1 className='heading-primary'>
            Nice to meet you!
            <br />
            I'm <span>Matheus Eli</span>.
          </h1>
        ) : (
          <>
            <AnimatedTitle text="Nice to meet you!" />
            <AnimatedTitle text="I'm Matheus Eli" />
          </>
        )}
        <motion.p {...attributes} className='paragraph'>
          Based in São Paulo, I’m a front-end developer passionate about
          building accessible web apps that users love.
        </motion.p>

        <motion.h6 {...attributes} onClick={() => contact()} className='btn'>
          CONTACT ME
        </motion.h6>
      </div>
    </section>
  );
}

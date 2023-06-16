import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]  ">
      <h2 className={`${styles.heading2} drop-shadow-xl shadow-[#7edfee] text-[#7edfee]`} >
        What People are <br className="sm:block hidden" /> <span className="text-[#afd6dc]">saying about us
          </span> 
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} border-[1px] border-b-[#33bbcf] border-t-[#33bbcf] rounded-xl p-5 text-left max-w-[450px] `}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap md:flex-nowrap flex-row  sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;

import React from "react";
import Marquee from "react-fast-marquee";

const Marqee = () => {
  return (
    <div>
      <Marquee className="marquee" speed={120}>
        <h6>
          Don’t miss our MEGA SALE: Save up to 50% on select items! This offer
          is for a limited time only. Hurry, shop your favorites now
        </h6>
      </Marquee>
    </div>
  );
};

export default Marqee;

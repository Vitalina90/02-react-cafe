import css from "../VoteOptions/VoteOptions.module.css"
// import { useState } from "react";
// import { VoteType } from "../../types/votes";


// interface VoteOptionsProps {
//   onVote: (type: VoteType) => void;
//   onReset: () => void;
//   canReset: boolean;
// }

export default function VoteOptions() {
  return (
    <div className={css.container}>
      <button className={css.button}>Good</button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
      <button className={css.button}>Reset</button>
    </div>
  );
};


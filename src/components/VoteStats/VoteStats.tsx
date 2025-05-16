import css from "../VoteStats/VoteStats.module.css"

export default function VoteStats() {
    return (
        <div className={css.container}>
  <p className={css.stat}>Good: <strong>0</strong></p>
  <p className={css.stat}>Neutral: <strong>0</strong></p>
  <p className={css.stat}>Bad: <strong>0</strong></p>
  <p className={css.stat}>Total: <strong>0</strong></p>
  <p className={css.stat}>Positive: <strong>0%</strong></p>
</div>

    )
}
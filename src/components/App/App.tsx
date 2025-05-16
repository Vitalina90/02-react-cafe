import css from "./App.module.css"
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";



export default function App() {

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions />
            <VoteStats />
        </div>

    );
 };

 


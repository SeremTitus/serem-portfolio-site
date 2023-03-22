import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}> React Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/portfolio'>All Meetups</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;
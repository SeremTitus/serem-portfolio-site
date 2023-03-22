import MainNavigation from './MainNavigation';
import MainFooter from './MainFooterjs';
import classes from './Layout.module.css'
function layout(props){
    return(
        <div >
            <MainNavigation />
        <main className={classes.main}>
            {props.children}
        </main>
            <MainFooter />
        </div>

    );
}
export default layout;
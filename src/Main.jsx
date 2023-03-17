import Home from './Home';
import Details from './Details';
import Story from './Story';
import NewCatForAdoption from './NewCatForAdoption';
import Subscribe from './Subscribe';

function Main({ page, onNav }){

    return (
        <main>
            { (page === '/') && <Home/>}
            { (page === '/Details.html') && <Details onNav={onNav}/>}
            { (page === '/Story.html') && <Story/>}
            { (page === '/NewCatForAdoption.html') && <NewCatForAdoption/>}
            { (page === '/Subscribe.html') && <Subscribe onNav={onNav}/>}
        </main>
    );
}

export default Main;
import content from './detailsContent';
import './Details.css';
import './Story.css';

function Details({onNav}){

    const list = content.map( item => {
        return (
            <div className = "panel" key={item.name}>
                <img className = "panel__img" src={item.img} alt={item.alt} />
                <p className="panel__text"> 
                {item.text} {!item.path ? <></> : <a href={item.path} onClick = {onNav} >Go to Gallery</a>}</p>
            </div>
        );
    });
    return(
        <>
            <div className="panels">
                {list}
            </div>
        </>
    );
}

export default Details;
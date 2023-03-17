import content from './storyContent';
import './Story.css';
import './Details.css';
import { useState } from 'react';
import './buttons.css';

const MainStory=()=>{
    const [cardInfo,setCard] = useState(content);
  
    console.log(cardInfo);
    const removeCard = (index) => { 
        const newCards = cardInfo.filter((_,i) => i !== index);
        setCard(newCards);
    }
        
const CatIndex= (item,index)=>{

    
        return(
            <div className="card" key={item.name}>
                <img className="card__img" src={item.img} alt="panel image" />
                
                <button className="button__two" onClick={() => removeCard(index)}>Adopt</button>
                
                
            </div>
        );
    }

    
    return (
        
        <div className="panels">
            {cardInfo.map(CatIndex)};

        </div>
        
    );
}

export default MainStory;
import React,{useState} from 'react'
import "./card.css";
import TinderCard from 'react-tinder-card';
import Icon from "../../icont.jpeg";

function Main() {
const[LastDirection,setLastDirection]=useState();
const[people,setPeople]=useState(
    
    
    [

{
    name:'elon mask',
    // url: "https://fr.wikipedia.org/wiki/Elon_Musk#/media/Fichier:Elon_Musk_Royal_Society.jpg"
    url:"https://m.media-amazon.com/images/I/51L8icIu-hL.jpg"
},

{
    name:'jeph bezos',
    url:"https://pbs.twimg.com/profile_images/950908457334591493/3y7cbwQn.jpg"
} ,
] );


const swiped = (direction,nameToDelete) => {
    console.log("removing:"+nameToDelete);
    // setLastDirection(direction);
  }
  
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

const outOframe=(name)=>{
    console.log(name + "left the screen");
}
    return (
        <div className="tinderCards"> 
  
            <div className="tinderCards_cardContainer">
         {people.map((person)=>(
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=>swiped(dir,person.name)}
            onCardLeftScreen={()=>outOframe(person.name)} >

      <div style={{backgroundImage:`url(${person.url})`}}
      
      className="card"
      >
     <h3>{person.name}</h3>     
     
        
      </div>


            </TinderCard>
        
            ))}
        
            </div>
          
            
            </div>
    )
}

export default Main

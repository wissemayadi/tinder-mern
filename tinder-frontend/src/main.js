import React,{useState,useEffect} from 'react'
import axios from "axios";
import "./card.css";
import TinderCard from 'react-tinder-card';
import Icon from "./icont.jpeg";

function Main() {
const[LastDirection,setLastDirection]=useState();
const[people,setPeople]=useState([]);

useEffect(() => {
async function fetchData(){
    const req = await axios.get('/tinder/cards');
    setPeople(req.data);
}
fetchData();

console.log(people);
},[])


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

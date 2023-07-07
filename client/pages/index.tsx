import React, {useEffect, useState}from 'react';

function index() {

  const[message, setMessage] = useState("Loading");
  const[people, setPeople] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:8080/api/home").then(
      response => response.json())
      .then((data) => {
        //message = "Loading"
        //once data is retrieved
        // message is set to data.message
        setMessage(data.message);
        setPeople(data.people);
        console.log(data.people);
    });
  }, []);



  return (
    <div>
      <div>{message}</div>
      
{people.map((person, index) =>(
    <div key= {index}>person</div>
  ))}


    </div>
  );
};

export default index;
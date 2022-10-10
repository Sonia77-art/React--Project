export default function Button(props) {
    function handleClick(event) { 
          console.log("button was clicked")

            alert("Button was clicked");
       
    }
    return <button onClick= {handleClick}>{props.text}</button>;
}
   
   

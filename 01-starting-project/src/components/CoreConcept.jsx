import './CoreConcept.css'
// Props
/*
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}
*/
// alternative props syntax = object destructuring
export default function CoreConcept({image,description,title}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>  
      </li>
    );
  }
/* 
export default function TabButton(props){
    return  <li><button>{props.children}</button></li>;
}
*/

//passing fucntion as values to props i.e.(onSelect) 
// and now adding the boolean expression (isSelected) to check if button is selected then mark is active for dynamic styling
export default function TabButton({ children , onSelect, isSelected}) {
  // this is normal vailla JS event listener code, but in react we add event listener to elements
  // by adding special attribute (or special prop to those elements) i.e. onClick
  // document.querySelector('button').addEventListener('click', ()=>{});
   /* 
   rather than declaring function here we can do it by passing the fucntion as props
    function onSelect(){
        console.log('Hello AK');
    }
   */
  return (
    <li>
        {/* so here we have added the eventlistener onSelect  */}
        {/* if button is selected then class is active else undefined */}
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
/*
export default function TabButton({label}){
    return  <li><button>{label}</button></li>;
}
*/
// we can use any of these syntaxes

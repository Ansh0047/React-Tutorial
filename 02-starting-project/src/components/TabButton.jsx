// here we can use the wrapping of extra classes ie.(...props) but for that we have to use the original function where we are passing those pops
// for example here onSelect we use (...props) and on that file where we have declared TabButton and passes the onSelect we use onClick
export default function TabButton({ children, isSelected, ...props}) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

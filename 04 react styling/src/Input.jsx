import { styled } from "styled-components";

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  // here in the color propert we have set the styled component with the dynamic style
  // where this function will executed to dynamically derive the value and this styled component will recieve props
  // as objects as an input for this function
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;

  // and make sure this invalid is a prop that is passed as an input to the function
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  border: 1px solid ${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;


// now here we will not export these input and label component we just use another componet and combine both 
// of these and make one reusable component and take any props as input and use with them

// these props are taken as an input and used inside the nested components
export default function CustomInput({label, invalid, ...props}){   // ...props == to all the classes remaining 
    return <p>
        <Label $invalid={invalid}>{label}</Label>
        <Input $invalid={invalid} {...props}/>
    </p>
}
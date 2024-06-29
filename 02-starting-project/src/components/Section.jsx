
//  here this (...prop) combines all the remaining extra props are forwarded to here
export default function Section({ title, children , ...props}) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function TabButton({ children }) {

function handleClick() {
  console.log(`You clicked the ${children} tab!`);
}

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

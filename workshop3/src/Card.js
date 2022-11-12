// Create a component to show props.
export default function Card(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Favorite Class: {props.favoriteClass}</p>
    </div>
  );
}

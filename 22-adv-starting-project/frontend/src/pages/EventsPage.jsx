import {Link} from "react-router-dom";

const EVENTS = [
  {id: "e1", title: "Event 1"},
  {id: "e2", title: "Event 2"},
  {id: "e3", title: "Event 3"},
];

function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;

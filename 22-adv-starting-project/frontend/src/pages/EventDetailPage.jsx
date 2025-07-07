//import {useParams} from "react-router-dom";
import {redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  //const params = useParams();
  const data = useRouteLoaderData("event-detail");
  return (
    // <>
    //   <h1>Event Detail Page</h1>
    //   <p>{params.eventId}</p>
    // </>
    <EventItem event={data.event} />
  );
}

export default EventDetailPage;

export async function loader({request, params}) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(JSON.stringify({message: "Could not fetch details for selected event"}), {
      status: 500,
    });
  } else {
    return response;
  }
}

export async function action({params, request}) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({message: "Could not delete event"}), {
      status: 500,
    });
  }

  return redirect("/events");
}

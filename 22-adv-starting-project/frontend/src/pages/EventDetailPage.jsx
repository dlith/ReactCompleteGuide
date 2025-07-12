//import {useParams} from "react-router-dom";
import {redirect, useRouteLoaderData, Await} from "react-router-dom";
import {Suspense} from "react";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
  //const params = useParams();
  //const data = useRouteLoaderData("event-detail");
  const {event, events} = useRouteLoaderData("event-detail");
  return (
    // <>
    //   <h1>Event Detail Page</h1>
    //   <p>{params.eventId}</p>
    // </>
    <>
      <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
        <Await resolve={event}>{(loadEvent) => <EventItem event={loadEvent} />}</Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
        <Await resolve={events}>{(loadEvents) => <EventsList events={loadEvents} />}</Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(JSON.stringify({message: "Could not fetch details for selected event"}), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //return {isError: true, message: "Could not fetch events."};
    //throw {message: "Could not fetch events"};
    throw new Response(JSON.stringify({message: "Could not fetch events"}), {
      status: 500,
    });

    //return json({message: "Could not fetch events"}, {status: 500});
  } else {
    //return response;
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({request, params}) {
  const id = params.eventId;

  return {
    event: await loadEvent(id),
    events: loadEvents(),
  };
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

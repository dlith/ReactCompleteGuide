import EventForm from "../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return <EventForm event={event} />;
}

export default EditEventPage;

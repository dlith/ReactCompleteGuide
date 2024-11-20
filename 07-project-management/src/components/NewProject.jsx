import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <>
      <div>
        <menu>
          <li>
            <button>Cancel</button>
          </li>
          <li>
            <button>Save</button>
          </li>
        </menu>
        <div>
          <Input label="Title" />
        </div>
        <div>
          <Input label="Description" textarea />
        </div>
        <div>
          <Input label="Due date" />
        </div>
      </div>
    </>
  );
}

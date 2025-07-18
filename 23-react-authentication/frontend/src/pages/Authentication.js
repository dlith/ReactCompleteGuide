import {redirect} from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {
  const searchedParams = new URL(request.url).searchParams;
  console.log(searchedParams.get("mode"));
  const mode = searchedParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw new Response(JSON.stringify({message: "Unsuported mode"}), {
      status: 422,
    });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({message: "Could not auth user"}), {
      status: 500,
    });
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);

  // soon: manage that token.
  return redirect("/");
}

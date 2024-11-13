import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div>
      <h1>Oh no, this route doesnt exist!</h1>
      <Link to={"/"}>
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
}
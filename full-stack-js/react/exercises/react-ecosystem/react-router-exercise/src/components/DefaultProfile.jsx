import { Link } from "react-router-dom";

export function DefaultProfile() {
  return (
    <ul>
      <li>
        <Link to={"popeye"}>Popeye</Link>
      </li>
      <li>
        <Link to={"spinach"}>Spinach</Link>
      </li>
    </ul>
  );
}

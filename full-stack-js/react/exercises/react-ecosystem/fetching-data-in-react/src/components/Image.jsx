import { useEffect, useState } from "react";

export function Image() {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((res) => setImageURL(res[0].url))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loadinggg</p>;
  if (error) return <p>Opppssieeee</p>;

  return (
    <>
      <h1>An Image</h1>
      <img src={imageURL} alt={"Placeholder text"} />
    </>
  );
}

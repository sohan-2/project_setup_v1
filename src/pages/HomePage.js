import React from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchExampleData } from "../api/example";

function HomePage() {
  const { isFetching, data, error } = useQuery({
    queryKey: ["exampleData"],
    queryFn: fetchExampleData,
  });

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default HomePage;

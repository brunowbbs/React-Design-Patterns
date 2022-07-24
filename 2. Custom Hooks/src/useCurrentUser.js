import { useState, useEffect } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8080/current-user");
      const json = await response.json();
      setUser(json);
    })();
  }, []);

  return user;
};

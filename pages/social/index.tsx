import { useCallback, useState } from "react";

export default function Social() {
  const [subscribers, setSubscribers] = useState(1000);

  const handleSubscribers = useCallback(() => {
    setSubscribers((subs) => subs + 1);
  }, []);

  return (
    <>
      <h1>Subscribers: {subscribers}</h1>
      <button onClick={handleSubscribers}>Subscribe</button>
    </>
  );
}

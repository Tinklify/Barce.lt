'use client'
import { useEffect, useState } from 'react';

export default function BookingCalendar() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="min-h-[800px] w-full" />; // Placeholder

  return (
    <>
      <iframe 
        src="https://link.tinklify.lt/widget/booking/toeYWKXsEZZntqm99bIs" 
        allow="payment" 
        style={{width: "100%", border: "none", overflow: "hidden", minHeight: "800px"}} 
        scrolling="yes" 
        id="toeYWKXsEZZntqm99bIs_1788113300011"
      ></iframe>
      <script src="https://link.tinklify.lt/js/form_embed.js" type="text/javascript"></script>
    </>
  );
}

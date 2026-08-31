'use client'
import { useEffect, useState } from 'react';

export default function ReviewsWidget() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="min-h-[400px] w-full flex items-center justify-center border border-slate-200 rounded-sm">Įkeliami atsiliepimai...</div>;

  return (
    <div className="w-full">
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script type="text/javascript" src="https://reputationhub.site/reputation/assets/review-widget.js"></script>
      <iframe 
        className="lc_reviews_widget" 
        src="https://reputationhub.site/reputation/widgets/review_widget/bRV1scOzrklKXCJipSiE?widgetId=6a918909d12b8f519a75c932" 
        frameBorder="0" 
        scrolling="no" 
        style={{minWidth: "100%", width: "100%", minHeight: "400px"}}
      ></iframe>
    </div>
  );
}

import Script from 'next/script';

export function GHLForm({ id }: { id: "ghl-form-samata" | "ghl-form-kontaktai" }) {
  return (
    <div id={id} className="w-full">
      <iframe 
        src="https://link.tinklify.lt/widget/form/73T2ZwFiCJJWLsVqkdUD"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
        id="inline-73T2ZwFiCJJWLsVqkdUD" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Contact Form"
        data-height="899"
        data-layout-iframe-id="inline-73T2ZwFiCJJWLsVqkdUD"
        data-form-id="73T2ZwFiCJJWLsVqkdUD"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Website Contact Form"
      />
      <Script src="https://link.tinklify.lt/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}

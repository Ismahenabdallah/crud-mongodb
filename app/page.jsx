import TopicsList from "@/components/TopicsList";
import SecureRoute from "@/components/secureRouter";
const webpush = require('web-push');

// VAPID keys should be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  if (typeof window !== 'undefined') {
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  } else {
    // Handle the case when running in a non-browser environment (e.g., server-side).
    return null;
  }
}

export default function Home() {
  const convertTo = urlBase64ToUint8Array(vapidKeys.publicKey);
  console.log("convertTo", convertTo);
  // console.log(vapidKeys.publicKey, vapidKeys.privateKey);
  return (
    <div> <SecureRoute> <TopicsList /></SecureRoute></div>
  );
}

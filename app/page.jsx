import TopicsList from "@/components/TopicsList";
import SecureRoute from "@/components/secureRouter";

export default function Home() {
  return (
    <div> <SecureRoute> <TopicsList /></SecureRoute>


    </div>
  );
}

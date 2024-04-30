import { Header } from "@/components/Header";
import { Links } from "@/components/Header";

export default function Home() {
  return (
    <div class="flex items-center">
      <Header pageName={"Home"} />
      <Links />
    </div>
  );
}

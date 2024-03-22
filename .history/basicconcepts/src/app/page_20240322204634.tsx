import Image from "next/image";
import ConditionRendering from "./Components/ConditionRendering";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      {/* Conditional Rendering */}

      <ConditionRendering />
      
    </main>
  );
}

import Image from "next/image";
import ConditionRendering from "./Components/ConditionRendering";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Conditional Rendering */}

      <ConditionRendering />
      
    </main>
  );
}

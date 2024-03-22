import Image from "next/image";
import ConditionRendering from "./Components/ConditionRendering";

export default function Home() {
  return (
    <main className=" min-h-screen p-7">
      {/* Conditional Rendering */}

      <ConditionRendering />
      
    </main>
  );
}

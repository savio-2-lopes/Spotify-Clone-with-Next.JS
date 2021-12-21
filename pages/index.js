import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div class="bg-black h-screen overflow-hidden">
      <main>
        <Sidebar />
        {/* Center */}
      </main>
    </div>
  );
}

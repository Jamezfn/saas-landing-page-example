import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Image from "next/image";

export default function Home() {
  return (
	<>
		<Navbar/>
		<Hero/>
		<LogoTicker/>
	</>
  );
}

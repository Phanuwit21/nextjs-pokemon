import Image from "next/image";
import Header from "./components/Header";
import PokeData from "./components/PokeData";
import PokeDataV2 from "./components/PokeDataV2";

export default function Home() {
  return (
    <>
      <Header />
      <PokeData />
    </>
  );
}

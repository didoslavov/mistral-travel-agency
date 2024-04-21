import Content from "@/components/Content/Content";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Offers from "@/components/Offers/Offers";
import Partners from "@/components/Partners/Partners";
import Program from "@/components/Program/Program";

export default function Home() {
  return (
    <main className="grid grid-cols-12">
      <Header />
      <Hero />
      <Content />
      <Program />
      <Offers />
      <Partners />
    </main>
  );
}

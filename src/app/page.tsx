import Content from "@/components/Content/Content";
import Cta from "@/components/Cta/Cta";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Offers from "@/components/Offers/Offers";
import Partners from "@/components/Partners/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-12">
        <Hero />
        <Content />
        <Offers />
        <Partners />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

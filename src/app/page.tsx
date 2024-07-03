import BuyNow from "@/components/buy-now";
import CTACard from "@/components/cta-card";
import Footer from "@/components/footer";
import GetProducts from "@/components/get-products";
import HowItWorks from "@/components/how-it-works";
import InfoBox from "@/components/info-box";
import TopHeader from "@/components/top-header";
import { AlignJustify, ShoppingCart, X } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative bg-[#F4F4F6]">
      {/* This div is for the top header that will be fixed to the top of the screen */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <TopHeader />
      </div>
      <section className="mt-24 z-0">
        {/* <GetProducts /> */}
        <BuyNow />
        <div className="grid grid-cols-2 p-4 gap-4">
          <InfoBox icon={ShoppingCart} text="Only one person needs a card and everyone can connect." />
          <InfoBox icon={X} text="Works will all types of phones. Both iPhone and Android." />
          <InfoBox icon={AlignJustify} text="No app required to share your profile. It opens in the browser." />
          <InfoBox icon={ShoppingCart} text="Built to last a lifetime. Update your info as it changes." />
        </div>
        <HowItWorks />
        <CTACard size="large" title="One card. A life full of connecting" />
        <CTACard size="small" title="share your contact info, social accounts, music, payment info & more." image="/socials.jpg" />
      </section>
      <Footer />
    </main>
  );
}

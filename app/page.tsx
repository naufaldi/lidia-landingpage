import Feature from "@/components/home/feature";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";

import Reviews from "@/components/home/reviews";
import Service from "@/components/home/service";
import { HeartIcon, MessageCircle, SearchIcon } from "lucide-react";
import dynamic from "next/dynamic";

const dataItems = [
  {
    Icon: SearchIcon,
    title: "Search book",
    description: "Effortlessly find your next read with our powerful and intuitive book search.",
  },
  {
    Icon: MessageCircle,
    title: "Review book",
    description: "Discover insightful critiques  and share your thoughts on diverse literary masterpieces effortlessly.",
  },
  {
    Icon: HeartIcon,
    title: "Wishlist book",
    description: "Curate your literary dreams–wishlist books  for future  adventures and discoveries.",
  },
];

export default function Home() {
  const Location = dynamic(() => import('@/components/home/location'), {
    ssr: false,
  })
  return (
    <>
      <Hero />
      <Feature sectionSubtitle="🤔• What You Can Do?" sectionTitle="FEATURES" dataItems={dataItems} />
      <Service />
      <Reviews />
      <Location />
      <Footer />
    </>
  );
}

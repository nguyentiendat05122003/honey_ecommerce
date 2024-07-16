import Banner from "@/components/banner";
import Gifts from "@/components/gifts";

export default function Home() {
  return (
    <div className="min-h-[68vh] padding-topBanner overflow-hidden">
      <Banner />
      <Gifts />
    </div>
  );
}

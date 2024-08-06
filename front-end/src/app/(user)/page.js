import Banner from "@/components/banner";
import Boll from "@/components/boll";
import Event from "@/components/event";
import Footer from "@/components/footer";
import Gifts from "@/components/gifts";
import ProductList from "@/components/product-list";
import Sale from "@/components/sale";

export default function Home() {
  return (
    <div className="min-h-[68vh] padding-topBanner overflow-hidden">
      <Banner />
      <Gifts />
      <ProductList/>
      <Sale/>
      <Boll/>
      <Event/>
      <Footer/>
    </div>
  );
}

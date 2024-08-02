import Banner from "@/components/banner";
import Gifts from "@/components/gifts";
import ProductList from "@/components/product-list";

export default function Home() {
  return (
    <div className="min-h-[68vh] padding-topBanner overflow-hidden">
      <Banner />
      <Gifts />
      <ProductList/>
    </div>
  );
}

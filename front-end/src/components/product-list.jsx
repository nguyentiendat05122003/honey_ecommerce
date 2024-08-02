import HeaderProductList from "./header-productList";
import ProductItem from "./product-item";
export default function ProductList() {
  return (
    <div>
      <div className="pt-sc">
        <div className="container">
          <div className="w-full mb-[3.2rem] flex flex-wrap gap-1 justify-between items-end">
            <HeaderProductList type="Sản phẩm" title="Mật ong nhập khẩu" />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-[1.2rem] md:grid-cols-3">
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
}

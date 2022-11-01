import ProductCard from "./ProductCard";

function ProductList({ title }) {
  return (
    <div className="mx-2 my-10">
      <div className="w-fit rounded-t-lg border-t border-l border-r border-amber-700 bg-orange-100 px-5 py-1">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="overflow-x-auto rounded-b-md rounded-tr-md border border-neutral-300 py-5 shadow-xl">
        <div className="flex flex-row justify-between gap-x-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ProductList;

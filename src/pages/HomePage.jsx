import ProductList from "../components/ProductList";

function HomePage() {
  return (
    <div className="container mx-auto">
      <div className="mx-auto mt-10 w-fit">
        <input
          className="rounded-l-md border-t border-b border-l border-neutral-400 bg-neutral-100 px-3 text-lg focus:border-neutral-600"
          type="text"
        />
        <button className="rounded-r-md border border-amber-700 bg-orange-100 px-3 text-lg hover:bg-orange-200">
          Buscar
        </button>
      </div>
      <ProductList title="ofertas" />
      <ProductList title="Televisores" />
      <ProductList title="Celulares" />
    </div>
  );
}

export default HomePage;

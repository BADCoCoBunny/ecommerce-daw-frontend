function ProductCard() {
  return (
    <div className="flex flex-col justify-center gap-y-1 rounded-md bg-orange-50 px-1 py-3 shadow-lg">
      <div className="h-28 w-28 overflow-hidden rounded-md">
        <img
          src="https://exitocol.vtexassets.com/arquivos/ids/7234186/consola-xbox-series-x-1tb-microsoft.jpg?v=637532554326130000"
          alt="Consola Xbox Series X 1Tb"
        />
      </div>
      <button className="mx-auto rounded-md bg-white px-3 py-1 shadow-md">
        Agregar
      </button>
    </div>
  );
}

export default ProductCard;

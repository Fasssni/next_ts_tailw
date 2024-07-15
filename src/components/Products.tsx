export default async function Products() {
  const data = await getProducts();

  return (
    <div>
      <h1 className="text-xl flex flex-col items-start justify-start gap-6 w-full height-auto">
        Products
      </h1>
      <div className="w-full h-auto flex justify-start items-start gap-[2rem] flex-wrap">
        {data?.products?.map((product: any) => (
          <div
            key={product.id}
            className="w-[25vw] height-[20vh] bg-white border-r-4 rounded-md py-1 px-2 cursor-pointer"
          >
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=30");
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

import React from "react";
import ProductCard from "./ProductCard";
import SeeMoreBtn from "./SeeMoreBtn";

const ProductsSection = () => {
  return (
    <>
      <section className="flex flex-col justify-center mx-2 py-6 xl:mx-6">
        <div className="px-3">
        {/* <img
          className="fixed right-0 top-0 m-auto border-none"
          src="/images/camino.png"
          alt="Neucrist Logo Picture"
          width={500}
          height={500}
        /> */}
          <h5 className="text-primary-red text-center leading-none text-3xl py-4 font-semibold">
            Productos destacados
          </h5>
          <hr />
          <p className="text-primary-black text-center py-4 md:text-normal">
            Estos son algunos de nuestros prodcutos destacados
          </p>
        </div>
        <div className="mx-2 lg:pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* {nursingHomes.map((data, i) => {
                    return <CardResidence key={i} {...data} />;
                })} */}
        </div>
        <SeeMoreBtn />
        {/* <div className="lg:pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2">          
            {nursingHomes.map((data, i) => {
                    return <CardResidence key={i} {...data} />;
                })}
        </div> */}
      </section>
    </>
  );
};

export default ProductsSection;

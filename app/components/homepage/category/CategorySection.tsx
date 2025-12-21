import React from "react";
import CategoryCard from "./CategoryCard";
import Image from "next/image";
import { modifyCategory } from "@/app/utils/modifyCategory";

const CategorySection = async () => {
  const categories = await modifyCategory();

  console.log({ categories });
  return (
    <section>
      <div>Total categories item is : {categories?.length}</div>
      <div>
        <Image
          src={categories[0]?.image}
          width={200}
          height={200}
          alt="category"
        />
      </div>
      <div>
        <CategoryCard />
      </div>
    </section>
  );
};

export default CategorySection;

// import { StaticImageData } from "next/image";
import { IModifyCategory, TFetchCategory } from "../types";
import assets from "../assets";

export const modifyCategory = async (): Promise<IModifyCategory[]> =>
  //   fetch_categories: TFetchCategory[],
  //   cat_images: StaticImageData[]
  {
    const cat_images = assets?.images?.categories;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/products/categories`
    );
    const categoryData = await response.json();
    const fetch_categories: TFetchCategory[] = categoryData?.data;
    return fetch_categories.map(
      (item: TFetchCategory, idx: number): IModifyCategory => {
        return { ...item, image: cat_images[idx]?.src || "" };
      }
    );
  };

export type TFetchCategory = {
  id: number;
  name: string;
};

export interface IModifyCategory extends TFetchCategory {
  image: string;
}

export interface IDishInput{
  title: string;
  price: string;
  image: string;
}

export interface IDishState extends IDishInput{
  id:string
}

export type IDishesApi = Omit<IDishState,"id">;
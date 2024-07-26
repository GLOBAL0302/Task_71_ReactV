export interface IDishInput{
  title: string;
  price: string;
  image: string;
}

export interface IDishState extends IDishInput{
  id:string
}

export interface ICartDishes {
  dish:IDishState
  amount: number
}

export type IDishesApi = Omit<IDishState,"id">;


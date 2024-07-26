export interface IDishInput {
  title: string;
  price: string;
  image: string;
}

export interface IDishState extends IDishInput {
  id: string;
}

export interface ICartDishes {
  dish: IDishState;
  amount: number;
}

export interface IOrderInfo{
  [id:string]: number;
}

export interface ICsOrders {
  [id:string]: IOrderInfo;
}

export interface IAllOrders {
  id: string
  items: IOrderInfo[]
}

export type IDishesApi = Omit<IDishState, 'id'>;

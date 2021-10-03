import {createContext,useContext,useState} from 'react';
export interface IBasketItem {
    id:string
    name:string
    price:number
    amount:number
    imgUrl?:string
}
export type BasketContextType={
    orders:IBasketItem[]
    addOrders:(newItem:IBasketItem)=>void
    updateOrders:(itemId:string)=>void
};
const defaultState ={
  orders:[],
  addOrders: ()=>console.log('added order'),
  updateOrders:()=>console.log('update item')
};


export const BasketContext = createContext<BasketContextType>(defaultState);
export const useStore = ()=>{
  const [orders,setOrders]=useState<IBasketItem[]>([{
    id:'1',
            name:'item 1',
            price:5,
            amount:10
        },
        {
            id:'2',
            name:'item 2',
            price:2,
            amount:8
        }]);

  const addOrders =(newItem:IBasketItem)=>{        
      setOrders([...orders,newItem]);
  };
  const updateOrders = (itemId:string)=>{
      setOrders(orders.map(item=>item.id===itemId ? {...item,amount:100}:item ));
  };

  const store = useContext(BasketContext);

  return {orders,addOrders,updateOrders,store};
  
  };
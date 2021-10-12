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
    updateItemCount:(amount:number)=>void
    itemCount:number,
    modalOpened:boolean,
    toggleModal:()=>void
};
const defaultState ={
  orders:[],
  itemCount:0,
  modalOpened:false,
  updateItemCount: ()=>console.log('item added'),
  addOrders: ()=>console.log('added order'),
  updateOrders:()=>console.log('update item'),
  toggleModal: ()=>console.log('toggle modal')
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
  const [itemCount,setItemCount]=useState(0);
  const [modalOpened,setModalOpened] = useState(false);
  const addOrders =(newItem:IBasketItem)=>{        
      setOrders([...orders,newItem]);
  };
  const updateOrders = (itemId:string)=>{
      setOrders(orders.map(item=>item.id===itemId ? {...item,amount:100}:item ));
  };

  const updateItemCount = (amount:number)=>{
   
      setItemCount(amount);

  };

  const toggleModal = ()=>{
      console.log('modalOpened',modalOpened);
      setModalOpened(!modalOpened);
  };

  const store = useContext(BasketContext);

  return {orders,addOrders,updateOrders,store, itemCount,updateItemCount,toggleModal,modalOpened};
  
  };
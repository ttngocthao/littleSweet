  import { isBrowser } from "./users";
  
   // const user = getUser();
    const windowReady = isBrowser();
  export interface IOrder{
        invoiceNumber:string
        finalGrandTotal:string
        token:string
        creationDate:string
    }

    export interface IDetail{
        uniqueId:string
        name:string
        price:number
        quantity:number
        image:string
        totalPrice:number
    }


 const secret = process.env.GATSBY_SNIPCART_API_KEY as string;
    const encodedStr = windowReady && window.btoa(secret);
    const fetchOpts = {
        headers: {
            'Authorization': `Basic ${encodedStr as string}`,
            'Accept': 'application/json'
        }  
    };
   const getSnipcartUser = async(userEmail:string)=>{
       try {
           const snipcartUser = await fetch(`${process.env.GATSBY_SNIPCART_API_URL as string}customers?email=${userEmail}`,fetchOpts );
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const snipcartUserJson = await snipcartUser.json();
            console.log('snipcartUserJson',snipcartUserJson);

            if(snipcartUserJson.items.length===0) throw new Error('User cant be found from Snipcart');

        const snipcartUserId = snipcartUserJson.items[0].id as string;
        const snipcartUsername = snipcartUserJson.items[0].billingAddressName as string;
      
        return {snipcartUserId,snipcartUsername};
       } catch (error) {
           console.log('error in getting snipcart user',error);

       }
        
       
   } ;

   const getSnipcartOrders = async(snipcartUserId:string)=>{          
        try {
            
            if(snipcartUserId){
                const orders = await fetch(`${process.env.GATSBY_SNIPCART_API_URL as string}customers/${snipcartUserId}/orders`, fetchOpts);
        
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const ordersJson = await orders.json();
                console.log('ordersJson',ordersJson);
                const ordersWithType= ordersJson as Partial<IOrder[]>;
                const ordersData = ordersWithType.map((item)=>
                {
                    if(item){
                        return(
                            {
                                creationDate:item.creationDate,
                                invoiceNumber:item.invoiceNumber , 
                                finalGrandTotal: item.finalGrandTotal,
                                token: item.token
                            }
                        );
                    }else{
                        return ;
                    }
                    
                    
                }) ;
                return ordersData;              
                
                
             }

        } catch (error) {
            console.log('Error in getting orders',error);    
            //need to handle if user cant be found  
        }
   };

  const getOrderDetails = async(token:string)=>{
      try {
          const result = await fetch(`${process.env.GATSBY_SNIPCART_API_URL as string}orders/${token}`, fetchOpts);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const resultJson = await result.json();
          const details = resultJson.items as Partial<IDetail[]>;
            return details;
      } catch (error) {
           console.log('Error in getting order details',error);   
      }
  };

   export {getSnipcartOrders,getSnipcartUser,getOrderDetails};
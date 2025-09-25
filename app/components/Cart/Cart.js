"use client";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import CartButton from "./CartButton";
import useERPStore from "@/app/store/useERPStore";
import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart,isCartOpen,setIsCartOpen } = useERPStore();
  
  const cartTotal = cart.reduce((sum, item) => {
    const price = Number(item.price_list_rate) || 0;
    const qty = Number(item.qty) || 0;
    return sum + price * qty;
  }, 0);
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }), // 🔑 burada gönderiyoruz
    });
    const { id } = await res.json();
  
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: id });
  };
  

  return (
      <>
       
        <Drawer backdrop="blur" placement="right" isOpen={isCartOpen} onOpenChange={()=>setIsCartOpen(!isCartOpen)} className=" max-w-md bg-white ax-w-md h-dvh">
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1">My Cart</DrawerHeader>
                {cart.length === 0 ? (
                    <div className="p-4">
                      <p className="text-red-500">Your cart is empty 🛒</p>
                    </div>
                  ) : (
                <DrawerBody>
                  <div className="p-1 space-y-1">
                    {cart.map((item, index) => (
                      <Card key={index} className=" ">
                        <CardHeader className="flex items-center gap-4">
                          <img
                            src={`${process.env.NEXT_PUBLIC_SITE_NAME}${item.image}`}
                            alt={item.item_name}
                            className="w-10 h-10 rounded-md object-cover"
                          />
                          <div>
                            <h2 className="font-semibold">{item.item_name}</h2>
                            <p className="text-sm text-gray-500">{item.price_list_rate}</p>
                          </div>
                        </CardHeader>

                        <CardBody>
                          <div className="flex items-center gap-1">
                            <Button isIconOnly size="sm" variant="bordered" onPress={() => decreaseQty(item.item_code)}>
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span>{item.qty}</span>
                            <Button isIconOnly size="sm" variant="bordered" onPress={() => increaseQty(item.item_code)}>
                              <Plus className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly size="sm" color="primary" onPress={() => removeFromCart(item.item_code)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                    ))}

                  
                  </div>
                </DrawerBody>
                )}
                <DrawerFooter className="flex flex-col gap-4">
               <div className="w-full flex items-center justify-between py-2">
                 <span className="text-sm text-gray-600">Cart Total</span>
                 <span className="font-semibold">{cartTotal.toFixed(2)}</span>
               </div>
               <div className="flex w-full justify-between gap-4">
            
                <Button color="primary" variant="shadow" onPress={clearCart} className="">
                      Clear Cart
                    </Button>
                    <Button color="primary" variant="shadow"  className="w-full" onPress={handleCheckout}>
                      Checkout
                    </Button>
                   
                  <Button color="primary" variant="shadow" onPress={onClose} >
                    Close
                  </Button>
               </div>
               
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </>
    );
  }
    
 



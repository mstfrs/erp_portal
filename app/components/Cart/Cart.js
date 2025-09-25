"use client";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import CartButton from "./CartButton";
import useERPStore from "@/app/store/useERPStore";
import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/react";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart,isCartOpen,setIsCartOpen } = useERPStore();



  return (
      <>
       
        <Drawer backdrop="blur" placement="right" isOpen={isCartOpen} onOpenChange={()=>setIsCartOpen(!isCartOpen)} className=" bg-white ax-w-md h-dvh">
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
                      <Card key={index} className=" border-gray-300 border-b-2">
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
                            <Button isIconOnly size="sm" color="danger" onPress={() => removeFromCart(item.item_code)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                    ))}

                    <Button color="danger" onPress={clearCart} className="w-full mt-4">
                      Clear Cart
                    </Button>
                  </div>
                </DrawerBody>
                )}
                <DrawerFooter>
                  <Button color="danger" variant="light" onPress={onClose} className="w-full absolute bottom-5 left-0">
                    Close
                  </Button>
                  {/* <Button color="primary" onPress={onClose}>
                    Action
                  </Button> */}
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </>
    );
  }
    
 



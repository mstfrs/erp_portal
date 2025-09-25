"use client";
import useERPStore from "@/app/store/useERPStore";
import { ShoppingCart } from "lucide-react";
import {Button} from "@heroui/react"; 

export default function CartButton({ onClick }) {
  const items = useERPStore((state) => state.cart);

  return (
    // <Button variant="outline" onClick={onClick} className="relative">
    //           <Button color="primary">
    //             <ShoppingCart className="w-5 h-5" />
    //             {items.length > 0 && (
    //                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
    //                   {items.length}
    //                 </span>
    //               )}
    //           </Button>
    <Button color="primary" className="relative">
      <ShoppingCart className="w-5 h-5" />
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          {items.length}
        </span>
      )}
    </Button>
  );
}

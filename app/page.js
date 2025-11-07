"use client";

import { authOptions } from "@/services/auth";
import { getItems } from "@/services/items/items";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useERPStore from "./store/useERPStore";


export default  function Dashboard() {
  const { data: session, status } = useSession(authOptions);
  const router = useRouter();
  // const [items, setItems] = useState([]);
  const { setItems } = useERPStore();

  useEffect(() => {
    if (status === 'loading') return; // Yükleniyor
    
    if (!session) {
      router.push('/auth/login'); // Login olmamış
      return;
    }
    
    // Session varsa items'ları yükle
    getItems(session).then((items) => {
      setItems(items);
    }).catch(() => {
      // Items yükleme hatası
    });
  }, [session, status, router, setItems]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!session) {
    return null;
  }
  return (
    <div className=''>
      Home Page
    </div>
  );
}

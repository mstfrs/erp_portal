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
    if (!session) router.push('/auth/login'); // Login olmamış
    getItems(session).then((items) => {
      setItems(items);
    });
  }, [session, status, router]);

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

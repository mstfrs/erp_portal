"use client";

import { authOptions } from "@/lib/auth";
import { getItems } from "@/lib/items/items";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


export default  function Dashboard() {
  const { data: session, status } = useSession(authOptions);
  const router = useRouter();
  const [items, setItems] = useState([]);

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
    <div className='bg-slate-500'>
      {/* <h1>Merhaba, {session.user.name}</h1>
      <button onClick={() => signOut({ callbackUrl: "/auth/login" })}>Logout</button> */}
      {/* <ItemCard list={items} /> */}
      <Navbar session={session} />
      <Home />
    </div>
  );
}

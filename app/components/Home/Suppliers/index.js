'use client'

import React, { useEffect, useState } from 'react'
import SingleItem from "./SingleItem";
import { getItems } from '@/lib/items/items';
import { useSession } from 'next-auth/react';
import { getSuppliers } from '@/lib/suppliers/suppliers';
import useERPStore from '@/app/store/useERPStore';
import Loading from '@/app/components/Loading';
import { supplierItems } from '@/lib/suppliers/supplierItems';
import Image from 'next/image';

const Suppliers = () => {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);
  const { suppliers, setSuppliers, setItems } = useERPStore();
  const [loading, setLoading] = useState(false);


  const handleClick = (item) => {
    supplierItems(session, { supplier: item.supplier, limit: 50 })
      .then((items) => {
        setItems(items)
      })
      .catch((err) => {
        console.error("Ürünler çekilirken hata:", err)
      })
  }


  useEffect(() => {
    setLoading(true)
    getSuppliers().then((data) => {
      setSuppliers(data)
      setLoading(false)
    })
    supplierItems(session)
      .then((data) => {
        setItems(data)
      })
      .catch((err) => {
        console.error("Ürünler çekilirken hata:", err)
      })
  }, [])


  return (
    <>
      {loading ? <Loading /> :
        <section className="overflow-hidden pt-17.5">
          <h1 className='text-2xl font-bold text-center'>Markalar</h1>
          <div className="flex w-full mx-auto px-4 sm:px-8 xl:px-0 py-2 ">

              {/* All Suppliers */}
              <div onClick={() => handleClick({})} className="mr-4 flex flex-col justify-between items-center">
                <div className=" bg-[#e3e3e3] h-20 w-20 relative rounded-full flex items-center justify-center mb-2 shadow-2xl cursor-pointer">
                  <Image src="/images/suppliers/Caffe_Bisse.png" alt="Category" fill className="rounded-full" unoptimized />
                </div>

                <div className="flex justify-center">
                  <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
                    Tüm Markalar
                  </h3>
                </div>
              </div>
              {/* All Suppliers */}
            <div className="flex flex-wrap justify-around gap-4">


              {
                suppliers.map((item, key) => (
                  <div key={key} onClick={() => handleClick(item)}>
                    <SingleItem item={item} handleClick={handleClick} />
                  </div>
                ))
              }

            </div>
          </div>
        </section>
      }
    </>
  )
}

export default Suppliers
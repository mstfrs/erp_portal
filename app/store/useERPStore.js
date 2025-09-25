import { create } from "zustand";
import { persist } from "zustand/middleware";

const useERPStore = create(
  persist(
    (set) => ({
      // --- state alanları ---
      suppliers: [],
      customers: [],
      items: [],
      cart: [],
      isCartOpen: false,
      loading: false,
      error: null,

      // --- actions ---
      setSuppliers: (suppliers) => set({ suppliers }),
      setCustomers: (customers) => set({ customers }),
      setItems: (items) => set({ items }),
      setIsCartOpen: (isCartOpen) => set({ isCartOpen }),
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),

      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (it) => it.item_name === product.item_name
          );

          if (existingItem) {
            return {
              cart: state.cart.map((it) =>
                it.item_name === product.item_name
                  ? { ...it, qty: it.qty + 1 }
                  : it
              ),
            };
          }

          return { cart: [...state.cart, { ...product, qty: 1 }] };
        }),

      removeFromCart: (item_code) =>
        set((state) => ({
          cart: state.cart.filter((it) => it.item_code !== item_code),
        })),

      increaseQty: (item_code) =>
        set((state) => ({
          cart: state.cart.map((it) =>
            it.item_code === item_code ? { ...it, qty: it.qty + 1 } : it
          ),
        })),

      decreaseQty: (item_code) =>
        set((state) => ({
          cart: state.cart
            .map((it) =>
                it.item_code === item_code
                ? { ...it, qty: Math.max(it.qty - 1, 0) }
                : it
            )
            .filter((it) => it.qty > 0),
        })),

      clearCart: () => set({ cart: [] }),

      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: "erp-store", // localStorage anahtar ismi
      getStorage: () => localStorage,
      partialize: (state) => ({ cart: state.cart }), // sadece cart saklanır
    }
  )
);

export default useERPStore;

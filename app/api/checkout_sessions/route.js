import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const { cart } = await req.json(); // 🔑 frontend’den gelen cart
        if (!cart || !Array.isArray(cart)) {
          return NextResponse.json({ error: "Cart boş veya yanlış formatta" }, { status: 400 });
        }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: cart.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.item_name || "Ürün",  // 🔑 burada ürün adı gerekiyor
            },
            unit_amount: Math.round(Number(item.price_list_rate) * 100),
          },
          quantity: Number(item.qty),
        })),
        success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
      });
      

    return NextResponse.json({ id: session.id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

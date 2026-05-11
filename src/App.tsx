import { useMemo, useState } from "react";

type MlSize = 3 | 5 | 10;

type Perfume = {
  name: string;
  prices: Record<MlSize, number>;
};

type CartItem = {
  name: string;
  ml: MlSize;
  price: number;
  qty: number;
};

const decants: Perfume[] = [
  { name: "9PM Night Out", prices: { 3: 120, 5: 180, 10: 320 } },
  { name: "Eter Arabian Sky", prices: { 3: 140, 5: 210, 10: 380 } },
  { name: "Vulcan Feu", prices: { 3: 155, 5: 230, 10: 420 } },
  { name: "Odyssey Aqua", prices: { 3: 115, 5: 170, 10: 300 } },
  { name: "Vulcan Sable", prices: { 3: 150, 5: 225, 10: 410 } },
  { name: "Art of Universe", prices: { 3: 165, 5: 250, 10: 450 } },
  { name: "Bad Boy Cobalt Elixir", prices: { 3: 145, 5: 220, 10: 395 } },
  {
    name: "Azzaro The Most Wanted Parfum",
    prices: { 3: 150, 5: 230, 10: 410 },
  },
  {
    name: "Afnan Supremacy Collector Edition",
    prices: { 3: 135, 5: 205, 10: 365 },
  },
  { name: "His Confession", prices: { 3: 125, 5: 190, 10: 340 } },
  { name: "Born in Roma Intense", prices: { 3: 145, 5: 220, 10: 395 } },
  {
    name: "Azzaro The Most Wanted By Night",
    prices: { 3: 145, 5: 220, 10: 395 },
  },
  { name: "Khamrah Qahwah", prices: { 3: 130, 5: 195, 10: 350 } },
];

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const shipping = 200;

  const addToCart = (perfume: Perfume, ml: MlSize) => {
    const price = perfume.prices[ml];

    setCart((prev) => {
      const found = prev.find(
        (item) => item.name === perfume.name && item.ml === ml
      );

      if (found) {
        return prev.map((item) =>
          item.name === perfume.name && item.ml === ml
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { name: perfume.name, ml, price, qty: 1 }];
    });
  };

  const subtotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.qty, 0),
    [cart]
  );

  const total = subtotal + (cart.length ? shipping : 0);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">
          VÉRYN | Perfumes & Decants
        </h1>

        <p className="text-lg text-zinc-300 mb-8">
          Oler bien no es un lujo… es tu esencia.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Decants</h2>

          <p className="text-zinc-300 mb-6">
            Prueba antes de comprar tu botella completa.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {decants.map((perfume) => (
              <div
                key={perfume.name}
                className="border border-zinc-800 rounded-2xl p-4"
              >
                <h3 className="text-xl font-medium mb-3">{perfume.name}</h3>

                <div className="flex gap-2 flex-wrap">
                  {[3, 5, 10].map((ml) => (
                    <button
                      key={ml}
                      onClick={() => addToCart(perfume, ml as MlSize)}
                      className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800"
                    >
                      {ml} ml — ${perfume.prices[ml as MlSize]}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border border-zinc-800 rounded-2xl p-5">
          <h2 className="text-2xl font-semibold mb-4">Carrito</h2>

          {cart.length === 0 ? (
            <p className="text-zinc-400">Aún no agregas productos.</p>
          ) : (
            <div className="space-y-3">
              {cart.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b border-zinc-900 pb-2"
                >
                  <span>
                    {item.name} — {item.ml} ml × {item.qty}
                  </span>

                  <span>${item.price * item.qty}</span>
                </div>
              ))}

              <div className="pt-4 space-y-1 text-zinc-300">
                <div>Subtotal: ${subtotal}</div>
                <div>Envío: ${cart.length ? shipping : 0}</div>

                <div className="text-xl text-white font-semibold">
                  Total: ${total}
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

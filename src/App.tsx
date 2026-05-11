import { useMemo, useState } from "react";

// VÉRYN single-file storefront // Simplified version with sections, decants cart, sticky WhatsApp button.

type MlSize = 3 | 5 | 10;

type Perfume = { name: string; category: "Diseñador" | "Nicho" | "Árabes"; prices: Record<MlSize, number>; };

type CartItem = { name: string; ml: MlSize; price: number; qty: number; };

const perfumes: Perfume[] = [ { name: "9PM Night Out", category: "Árabes", prices: { 3: 120, 5: 180, 10: 320 } }, { name: "Eter Arabian Sky", category: "Árabes", prices: { 3: 140, 5: 210, 10: 380 } }, { name: "Vulcan Feu", category: "Nicho", prices: { 3: 155, 5: 230, 10: 420 } }, { name: "Odyssey Aqua", category: "Diseñador", prices: { 3: 115, 5: 170, 10: 300 } }, { name: "Vulcan Sable", category: "Nicho", prices: { 3: 150, 5: 225, 10: 410 } }, { name: "Art of Universe", category: "Nicho", prices: { 3: 165, 5: 250, 10: 450 } }, { name: "Bad Boy Cobalt Elixir", category: "Diseñador", prices: { 3: 145, 5: 220, 10: 395 } }, { name: "Azzaro The Most Wanted Parfum", category: "Diseñador", prices: { 3: 150, 5: 230, 10: 410 } }, { name: "Afnan Supremacy Collector Edition", category: "Árabes", prices: { 3: 135, 5: 205, 10: 365 } }, { name: "His Confession", category: "Árabes", prices: { 3: 125, 5: 190, 10: 340 } }, { name: "Born in Roma Intense", category: "Diseñador", prices: { 3: 145, 5: 220, 10: 395 } }, { name: "Azzaro The Most Wanted By Night", category: "Diseñador", prices: { 3: 145, 5: 220, 10: 395 } }, { name: "Khamrah Qahwah", category: "Árabes", prices: { 3: 130, 5: 195, 10: 350 } }, ];

export default function App() { const [cart, setCart] = useState<CartItem[]>([]); const shipping = 200;

const addToCart = (perfume: Perfume, ml: MlSize) => { const price = perfume.prices[ml]; setCart((prev) => { const found = prev.find((i) => i.name === perfume.name && i.ml === ml); if (found) { return prev.map((i) => i.name === perfume.name && i.ml === ml ? { ...i, qty: i.qty + 1 } : i ); } return [...prev, { name: perfume.name, ml, price, qty: 1 }]; }); };

const subtotal = useMemo(() => cart.reduce((a, i) => a + i.price * i.qty, 0), [cart]); const total = subtotal + (cart.length ? shipping : 0);

return <div>VÉRYN storefront</div>; }

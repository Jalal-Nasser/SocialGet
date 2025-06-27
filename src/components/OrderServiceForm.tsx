import React, { useState } from "react";

export type QuantityOption = {
  amount: number;
  price: number;
  discount: number;
  bestSeller?: boolean;
};


// Service type from Supabase
export type SupabaseService = {
  id: string;
  platform: string;
  service_name: string;
  path: string;
  description: string;
  price: number;
  unit: string;
  completed_orders?: number;
  rating?: number;
};

interface OrderServiceFormProps {
  service: SupabaseService;
}


export default function OrderServiceForm({ service }: OrderServiceFormProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [customQty, setCustomQty] = useState("");
  const [username, setUsername] = useState("");

  const quantity = selected ?? (customQty ? parseInt(customQty) : 0);
  const total = quantity * service.price;

  // For now, just offer a few example quantity options
  const defaultQuantities = [50, 100, 250, 500, 1000, 2500, 5000, 10000];
  const quantities = defaultQuantities.map((amount) => ({
    amount,
    price: amount * service.price,
    discount: 0,
    bestSeller: amount === 1000,
  }));

  const handleSelect = (qty: number) => {
    setSelected(qty);
    setCustomQty("");
  };

  const handleCustomQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomQty(e.target.value.replace(/\D/, ""));
    setSelected(null);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left: Service Form */}
      <div className="flex-1 bg-white dark:bg-[#232834] p-8 rounded-xl border border-gray-200 dark:border-none shadow-xl relative overflow-hidden">
        {/* Subtle background gradient glow */}
        <div className="absolute inset-0 pointer-events-none rounded-xl" style={{background: 'radial-gradient(circle at 80% 10%, #99333322 0%, transparent 70%)'}} />
        <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">Order {service.service_name}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-yellow-500 dark:text-yellow-300 text-lg drop-shadow">★ {service.rating ?? 5}/5</span>
          <span className="text-green-600 dark:text-green-400 text-sm font-semibold">✔ {(service.completed_orders ?? 0).toLocaleString()} orders completed</span>
        </div>
        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Select Quantity</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {quantities.map((q) => (
            <button
              key={q.amount}
              className={`p-4 rounded-lg border-2 flex flex-col items-center transition-all duration-150 relative shadow-sm font-semibold text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066cc] ${
                selected === q.amount
                  ? "border-[#0066cc] bg-gradient-to-br from-[#0066cc22] to-[#fff0] dark:from-[#0066cc33] dark:to-[#232834] ring-2 ring-[#0066cc] shadow-[0_0_12px_2px_rgba(0,102,204,0.15)]"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-[#232834] hover:border-[#0066cc] hover:shadow-[0_0_8px_1px_rgba(0,102,204,0.10)]"
              }`}
              onClick={() => handleSelect(q.amount)}
            >
              <span className="text-lg font-bold text-gray-900 dark:text-white">{q.amount}</span>
              <span className="text-base text-gray-700 dark:text-white">${q.price.toFixed(2)}</span>
              {q.discount > 0 && (
                <span className="text-green-600 dark:text-green-400 text-xs">Save {q.discount}%</span>
              )}
              {q.bestSeller && (
                <span className="mt-1 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded shadow">Best Seller</span>
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter quantity"
            value={customQty}
            onChange={handleCustomQty}
            className="flex-1 p-2 rounded bg-white dark:bg-[#181c23] border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/30 transition-all"
          />
          <button
            className="px-4 py-2 bg-gradient-to-r from-[#993333] to-[#0066cc] text-white rounded font-bold shadow hover:from-[#0066cc] hover:to-[#993333] focus:outline-none focus:ring-2 focus:ring-[#0066cc] disabled:opacity-50"
            onClick={() => setSelected(customQty ? parseInt(customQty) : 0)}
            disabled={!customQty}
          >
            Apply
          </button>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-gray-900 dark:text-white">Target</label>
          <input
            type="text"
            placeholder={`Enter ${service.service_name} username`}
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-white dark:bg-[#181c23] border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-[#993333] focus:ring-2 focus:ring-[#993333]/30 transition-all"
          />
        </div>
        <div className="flex gap-6 mt-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-[#993333] dark:text-[#993333] text-xl drop-shadow">⏱</span>
            <span className="font-semibold text-gray-900 dark:text-white">Fast Delivery</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Starts within minutes, completes within 24 hours</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-[#993333] dark:text-[#993333] text-xl drop-shadow">💸</span>
            <span className="font-semibold text-gray-900 dark:text-white">Guaranteed</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Refund if we can't deliver as promised</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-[#993333] dark:text-[#993333] text-xl drop-shadow">⚡</span>
            <span className="font-semibold text-gray-900 dark:text-white">High Quality</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Real engagement from authentic accounts</span>
          </div>
        </div>
      </div>
      {/* Right: Order Summary */}
      <div className="w-full md:w-80 bg-white dark:bg-[#232834] p-8 rounded-xl h-fit border-2 border-transparent dark:border-none shadow-xl relative overflow-hidden" style={{boxShadow: '0 0 0 2px #993333, 0 8px 32px 0 rgba(0,102,204,0.10)'}}>
        {/* Subtle border gradient glow */}
        <div className="absolute inset-0 pointer-events-none rounded-xl" style={{background: 'radial-gradient(circle at 10% 90%, #0066cc22 0%, transparent 70%)'}} />
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Order Summary</h3>
        <div className="mb-2 flex justify-between">
          <span className="text-gray-700 dark:text-gray-300">Service:</span>
          <span className="font-bold text-gray-900 dark:text-white">{service.service_name}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="text-gray-700 dark:text-gray-300">Quantity:</span>
          <span className="font-bold text-gray-900 dark:text-white">{quantity || "Not selected"}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="text-gray-700 dark:text-gray-300">Unit Price:</span>
          <span className="font-bold text-gray-900 dark:text-white">${service.price.toFixed(3)} /{service.unit}</span>
        </div>
        <div className="mb-4 flex justify-between text-lg font-bold">
          <span className="text-gray-900 dark:text-white">Total:</span>
          <span className="text-gray-900 dark:text-white">${total.toFixed(2)}</span>
        </div>
        <button
          className="w-full py-3 rounded bg-gradient-to-r from-[#993333] to-[#0066cc] text-white font-bold text-lg shadow-lg hover:from-[#0066cc] hover:to-[#993333] focus:outline-none focus:ring-2 focus:ring-[#993333] transition-all duration-150 disabled:opacity-50 border-0"
          style={{boxShadow: '0 2px 16px 0 #993333aa'}}
          disabled={!quantity || !username}
        >
          Complete Order
        </button>
        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
          <span>🛡</span> Secure checkout guaranteed
        </div>
      </div>
    </div>
  );
}

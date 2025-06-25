import React, { useState } from "react";

export type QuantityOption = {
  amount: number;
  price: number;
  discount: number;
  bestSeller?: boolean;
};

interface OrderServiceFormProps {
  serviceName: string;
  description: string;
  quantities: QuantityOption[];
  unitPrice: number;
  completedOrders?: number;
  rating?: number;
  unitLabel?: string;
}

export default function OrderServiceForm({
  serviceName,
  description,
  quantities,
  unitPrice,
  completedOrders = 0,
  rating = 5,
  unitLabel = "Follower",
}: OrderServiceFormProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [customQty, setCustomQty] = useState("");
  const [username, setUsername] = useState("");

  const quantity = selected ?? (customQty ? parseInt(customQty) : 0);
  const total = quantity * unitPrice;

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
      <div className="flex-1 bg-[#232834] p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-1">Order {serviceName}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-yellow-400 text-lg">★ {rating}/5</span>
          <span className="text-green-400 text-sm">✔ {completedOrders.toLocaleString()} orders completed</span>
        </div>
        <h3 className="font-semibold mb-2">Select Quantity</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {quantities.map((q) => (
            <button
              key={q.amount}
              className={`p-4 rounded-lg border-2 flex flex-col items-center transition-all duration-150 ${
                selected === q.amount
                  ? "border-blue-500 bg-blue-900/30"
                  : "border-gray-700 bg-[#232834] hover:border-blue-400"
              }`}
              onClick={() => handleSelect(q.amount)}
            >
              <span className="text-lg font-bold">{q.amount}</span>
              <span className="text-base">${q.price.toFixed(2)}</span>
              <span className="text-green-500 text-xs">Save {q.discount}%</span>
              {q.bestSeller && (
                <span className="mt-1 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded">Best Seller</span>
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
            className="flex-1 p-2 rounded bg-[#181c23] border border-gray-700 text-white"
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setSelected(customQty ? parseInt(customQty) : 0)}
            disabled={!customQty}
          >
            Apply
          </button>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Target</label>
          <input
            type="text"
            placeholder={`Enter ${serviceName} username`}
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-[#181c23] border border-gray-700 text-white"
          />
        </div>
        <div className="flex gap-6 mt-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-red-400 text-xl">⏱</span>
            <span className="font-semibold">Fast Delivery</span>
            <span className="text-xs text-gray-400">Starts within minutes, completes within 24 hours</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-red-400 text-xl">💸</span>
            <span className="font-semibold">Guaranteed</span>
            <span className="text-xs text-gray-400">Refund if we can't deliver as promised</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-red-400 text-xl">⚡</span>
            <span className="font-semibold">High Quality</span>
            <span className="text-xs text-gray-400">Real engagement from authentic accounts</span>
          </div>
        </div>
      </div>
      {/* Right: Order Summary */}
      <div className="w-full md:w-80 bg-[#232834] p-8 rounded-xl h-fit">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="mb-2 flex justify-between">
          <span>Service:</span>
          <span className="font-bold text-white">{serviceName}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>Quantity:</span>
          <span className="font-bold text-white">{quantity || "Not selected"}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>Unit Price:</span>
          <span className="font-bold text-white">${unitPrice.toFixed(3)} /{unitLabel}</span>
        </div>
        <div className="mb-4 flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          className="w-full py-3 rounded bg-red-600 text-white font-bold text-lg hover:bg-red-700 disabled:opacity-50"
          disabled={!quantity || !username}
        >
          Complete Order
        </button>
        <div className="mt-2 text-xs text-gray-400 flex items-center gap-1">
          <span>🛡</span> Secure checkout guaranteed
        </div>
      </div>
    </div>
  );
}

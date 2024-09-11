import React, { useEffect, useState } from "react";

const ChatbotPage = () => {
  const [val, setval] = useState("");
  const [sale, setssale] = useState(false);

  useEffect(() => {
    if (val === "sales") {
      setssale(true);
    } else {
      setssale(false);
    }
  }, [val]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 p-4">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Chatbot</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select a Topic:
          </label>
          <select
            onChange={(e) => setval(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="default">Options</option>
            <option value="sales">Sales</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Query:
          </label>
          <input
            type="text"
            placeholder={
              sale
                ? "Enter your sales query here..."
                : "Enter your marketing query here..."
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;

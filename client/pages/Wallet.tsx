import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Eye, RefreshCw, Home, Wallet, MapPin, RotateCcw, Settings, X, ChevronDown, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function WalletPage() {
  const [showSwapPopup, setShowSwapPopup] = useState(false);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("SCV");
  const [toCurrency, setToCurrency] = useState("USDT");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const transactions = [
    {
      id: 1,
      name: "Mr Solomon",
      role: "Manufacturer",
      amount: "234 SCV",
      description: "65kg Of Plastic",
      status: "Successful",
      statusColor: "text-green-primary",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/5c49b802e9013dd1d9ae23bae4e43c32ed2e4792?width=82"
    },
    {
      id: 2,
      name: "Miss Bisi",
      role: "Collector",
      amount: "34 SCV",
      description: "65kg Of Plastic",
      status: "Pending",
      statusColor: "text-orange-500",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/4d35a2268442d358af95fa8cf5c63cdfcaf902b7?width=82"
    },
    {
      id: 3,
      name: "Mr Fidelis",
      role: "Recycler",
      amount: "234 SCV",
      description: "65kg Of Plastic",
      status: "Failed",
      statusColor: "text-red-500",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82"
    },
    {
      id: 4,
      name: "Miss Bisi",
      role: "Collector",
      amount: "34 SCV",
      description: "65kg Of Plastic",
      status: "Pending",
      statusColor: "text-orange-500",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/843aa10cf5a6c499d3a962ed7ff9c456d9bad54b?width=82"
    },
    {
      id: 5,
      name: "Mr Solomon",
      role: "Manufacturer",
      amount: "234 SCV",
      description: "65kg Of Plastic",
      status: "Failed",
      statusColor: "text-red-500",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82"
    },
    {
      id: 6,
      name: "Miss Bisi",
      role: "Collector",
      amount: "34 SCV",
      description: "65kg Of Plastic",
      status: "Pending",
      statusColor: "text-orange-500",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/843aa10cf5a6c499d3a962ed7ff9c456d9bad54b?width=82"
    }
  ];

  const handleSwap = () => {
    setShowSwapPopup(true);
  };

  const handleCloseSwapPopup = () => {
    setShowSwapPopup(false);
    setAmount("");
    setPassword("");
  };

  const handleSwapSubmit = () => {
    // Handle swap logic here
    console.log("Swap submitted:", { amount, fromCurrency, toCurrency });
    handleCloseSwapPopup();
  };

  return (
    <div className="min-h-screen bg-white max-w-[430px] mx-auto relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-5 py-3 bg-white">
        <div className="text-black font-medium text-lg">9:41</div>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`w-1 bg-black rounded-sm ${
                  bar === 1 ? 'h-3' : bar === 2 ? 'h-4' : bar === 3 ? 'h-5' : 'h-6'
                }`}
              />
            ))}
          </div>
          <div className="w-6 h-3 border border-black rounded-sm relative">
            <div className="absolute inset-0.5 bg-black rounded-sm" />
          </div>
          <div className="w-1 h-2 bg-black rounded-sm" />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2">
        <Link to="/dashboard" className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300">
          <ChevronLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/28243d70b3922d379a2209498d826dc75e11a946?width=96"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
            <Settings className="w-7 h-7 text-black" />
          </div>
        </div>
      </div>

      {/* Wallet Balance Card */}
      <div className="mx-3 my-6">
        <div className="bg-gradient-to-r from-green-gradient-start to-green-gradient-end rounded-lg p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
            <svg viewBox="0 0 160 141" className="w-full h-full">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M115 -30C178.514 -30 230 13.9963 230 68.2709C230 122.545 178.514 166.542 115 166.542C51.486 166.542 0 122.545 0 68.2709C0 13.9963 51.486 -30 115 -30Z"
                fill="url(#gradient)"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="68.2709" x2="230" y2="68.2709">
                  <stop offset="0.115425" stopColor="#009933" />
                  <stop offset="1" stopColor="#0AFC5B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-1">
              <span className="text-sm">Wallet Balance</span>
              <Eye className="w-5 h-3" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold">--.</span>
              <span className="text-2xl">--</span>
              <span className="text-xl ml-2">SCV</span>
            </div>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="mx-3 mb-6">
        <Button
          onClick={handleSwap}
          className="w-full bg-green-light text-black hover:bg-green-light/80 h-14 text-sm rounded-full"
        >
          <RefreshCw className="w-7 h-7 mr-4 stroke-green-primary" />
          Swap
        </Button>
      </div>

      {/* Wallet History */}
      <div className="px-4 pb-24">
        <h2 className="text-sm font-medium text-black mb-6">Wallet History</h2>
        
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={transaction.id}>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <img
                    src={transaction.avatar}
                    alt={transaction.name}
                    className="w-10 h-10 rounded-lg"
                  />
                  <div>
                    <div className="text-sm text-black">{transaction.name}</div>
                    <div className="text-xs text-black">{transaction.role}</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-black">{transaction.amount}</div>
                  <div className="text-xs text-black">{transaction.description}</div>
                </div>
                <div className={`text-xs font-medium ${transaction.statusColor}`}>
                  {transaction.status}
                </div>
              </div>
              {index < transactions.length - 1 && (
                <div className="w-full h-px bg-gray-border" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 shadow-lg">
        <div className="flex justify-center items-center gap-12 py-3 px-8">
          <Link to="/" className="flex flex-col items-center gap-2">
            <Home className="w-6 h-6 text-gray-text" />
            <span className="text-xs text-gray-text">Home</span>
          </Link>
          <div className="flex flex-col items-center gap-2">
            <Wallet className="w-6 h-6 text-green-primary" />
            <span className="text-xs text-green-primary font-medium">My Wallet</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="w-6 h-6 text-gray-text" />
            <span className="text-xs text-gray-text">Map</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RotateCcw className="w-6 h-6 text-gray-text" />
            <span className="text-xs text-gray-text">Waste</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Settings className="w-6 h-6 text-gray-text" />
            <span className="text-xs text-gray-text">Settings</span>
          </div>
        </div>
      </div>

      {/* Swap Popup */}
      {showSwapPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
          <div className="bg-white rounded-t-lg w-full max-w-[430px] min-h-[500px] max-h-[80vh] transform transition-transform duration-300 ease-out animate-slide-up relative">
            {/* Close Button */}
            <button
              onClick={handleCloseSwapPopup}
              className="absolute top-6 right-6 z-10"
            >
              <X className="w-6 h-6 text-gray-border" />
            </button>

            {/* Popup Content */}
            <div className="p-6 pt-12 pb-8">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-2">
                <RefreshCw className="w-8 h-8 text-green-primary" />
                <h2 className="text-xl font-medium text-black">Swap</h2>
              </div>
              <p className="text-sm text-black text-center mb-6">Convert your funds here</p>

              {/* Form */}
              <div className="space-y-4">
                {/* Amount Input */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-black">Amount</label>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount e.g 320 SCV"
                    className="w-full px-4 py-3 border border-gray-200 rounded-full text-xs placeholder:text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
                  />
                </div>

                {/* Currency Selection Row */}
                <div className="grid grid-cols-2 gap-3">
                  {/* From Currency */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-black">From Currency</label>
                    <div className="relative">
                      <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-full text-xs text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent appearance-none"
                      >
                        <option value="SCV">Currency (SCV)</option>
                        <option value="USDT">Currency (USDT)</option>
                        <option value="BTC">Currency (BTC)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-2 text-black" />
                    </div>
                  </div>

                  {/* To Currency */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-black">To Currency</label>
                    <div className="relative">
                      <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-full text-xs text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent appearance-none"
                      >
                        <option value="USDT">Currency (USDT)</option>
                        <option value="SCV">Currency (SCV)</option>
                        <option value="BTC">Currency (BTC)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-2 text-black" />
                    </div>
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-black">Enter Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-full text-xs placeholder:text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <EyeOff className="w-5 h-5 text-black" />
                    </button>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="pt-4">
                  <Button
                    onClick={handleSwapSubmit}
                    className="w-full bg-gradient-to-r from-green-gradient-start to-green-gradient-end text-white hover:from-green-gradient-start/90 hover:to-green-gradient-end/90 h-12 text-base font-medium rounded-full"
                  >
                    Swap
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

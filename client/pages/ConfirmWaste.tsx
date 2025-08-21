import { Button } from "@/components/ui/button";
import { ChevronLeft, ClipboardList, Search, X, DollarSign, ChevronDown, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ConfirmWaste() {
  const [wasteId, setWasteId] = useState("");
  const [showWasteDetails, setShowWasteDetails] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [tokenAmount, setTokenAmount] = useState("");
  const [password, setPassword] = useState("");

  const handleSearch = () => {
    if (wasteId.trim()) {
      setShowWasteDetails(true);
    }
  };

  // Debug function for testing - you can remove this later
  const handleDebugTest = () => {
    setWasteId("TEST123");
    setShowWasteDetails(true);
  };

  const handleConfirmWaste = () => {
    setShowPaymentPopup(true);
  };

  const handlePayment = () => {
    console.log("Processing payment...");
    // Payment logic here
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
      <div className="flex items-center gap-15 px-6 py-4">
        <Link to="/" className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300">
          <ChevronLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          <ClipboardList className="w-7 h-7 stroke-green-primary" />
          <h1 className="text-xl text-black font-normal">Confirm Waste</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        {!showWasteDetails ? (
          <div className="space-y-8">
            {/* Waste ID Input Section */}
            <div className="space-y-5">
              <div className="space-y-2.5">
                <label className="text-sm font-medium text-black">Waste ID</label>
                <div className="relative">
                  <input
                    type="text"
                    value={wasteId}
                    onChange={(e) => setWasteId(e.target.value)}
                    placeholder="Enter waste ID"
                    className="w-full h-14 px-3 pr-12 rounded-full border border-green-primary text-sm placeholder:text-gray-text focus:outline-none focus:ring-2 focus:ring-green-primary/20"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-border" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="pt-8">
              <Button
                onClick={handleSearch}
                disabled={!wasteId.trim()}
                className={`w-full h-14 text-base font-medium rounded-full transition-all duration-200 ${
                  wasteId.trim()
                    ? 'bg-gradient-to-r from-green-gradient-start to-green-gradient-end text-white hover:opacity-90'
                    : 'bg-gray-400 text-white cursor-not-allowed opacity-60'
                }`}
              >
                Search
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Waste Details Section */}
            <div className="space-y-6">
              <h2 className="text-base text-green-primary font-medium">Waste Details</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-black">Waste Type -</span>
                  <span className="text-black">Plastic</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-black">Waste Weight -</span>
                  <span className="text-black">10kg</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-black">Location -</span>
                  <span className="text-black">12.11lat 13.59long</span>
                </div>
              </div>
            </div>

            {/* Confirm Waste Button */}
            <div className="pt-8">
              <Button
                onClick={handleConfirmWaste}
                className="w-full h-14 text-base font-medium rounded-full bg-gradient-to-r from-green-gradient-start to-green-gradient-end text-white hover:opacity-90"
              >
                Confirm Waste
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Payment Popup */}
      {showPaymentPopup && (
        <div className="fixed inset-0 bg-gray-400/60 z-50 flex items-end">
          <div className="w-full max-w-[430px] mx-auto bg-white rounded-t-3xl p-6 animate-slide-up shadow-2xl">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowPaymentPopup(false)}
                className="p-1"
              >
                <X className="w-6 h-6 text-gray-border" />
              </button>
            </div>

            {/* Payment Content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-gradient-start to-green-gradient-end flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl text-black font-normal">Make Payment</h2>
                </div>
                <p className="text-sm text-gray-600 ml-13">Send Your Funds Here</p>
              </div>

              {/* Token Amount */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-black">Token Amount</label>
                  <div className="text-right">
                    <span className="text-xs text-black">Avail. Bal. </span>
                    <span className="text-xs text-green-primary font-medium">3,456.06 SCV</span>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={tokenAmount}
                    onChange={(e) => setTokenAmount(e.target.value)}
                    placeholder="Enter token amount e.g 320 SCV"
                    className="w-full h-14 px-4 rounded-full border border-gray-border text-sm placeholder:text-gray-text focus:outline-none focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>
              </div>

              {/* Wallet Address */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-black">Wallet Address</label>
                <div className="relative">
                  <div className="flex items-center w-full h-14 px-4 rounded-full border border-gray-border">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-6 h-6 bg-orange-500 rounded-full" />
                      <span className="text-xs text-black">0x5475.....</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-black">Enter Password</label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full h-14 px-4 pr-12 rounded-full border border-gray-border text-sm placeholder:text-gray-text focus:outline-none focus:ring-2 focus:ring-green-primary/20"
                  />
                  <EyeOff className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                </div>
              </div>

              {/* Send Button */}
              <div className="pt-4">
                <Button
                  onClick={handlePayment}
                  disabled={!tokenAmount.trim() || !password.trim()}
                  className={`w-full h-14 text-base font-medium rounded-full transition-all duration-200 ${
                    tokenAmount.trim() && password.trim()
                      ? 'bg-gradient-to-r from-green-gradient-start to-green-gradient-end text-white hover:opacity-90'
                      : 'bg-gray-400 text-white cursor-not-allowed opacity-60'
                  }`}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

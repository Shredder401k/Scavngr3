import { Button } from "@/components/ui/button";
import { ChevronDown, Eye, Coins, ClipboardList, Home, Wallet, MapPin, RotateCcw, Settings } from "lucide-react";

export default function Index() {
  const recyclers = [
    { id: 1, name: "Mr Oyebade", location: "Kaduna", waste: "65kg Of Plastic", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/5c49b802e9013dd1d9ae23bae4e43c32ed2e4792?width=82" },
    { id: 2, name: "Mr Oyebade", location: "Kaduna", waste: "65kg Of Plastic", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/4d35a2268442d358af95fa8cf5c63cdfcaf902b7?width=82" },
    { id: 3, name: "Mr Oyebade", location: "Kaduna", waste: "65kg Of Plastic", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82" },
    { id: 4, name: "Mr Oyebade", location: "Kaduna", waste: "65kg Of Plastic", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/843aa10cf5a6c499d3a962ed7ff9c456d9bad54b?width=82" },
    { id: 5, name: "Mr Oyebade", location: "Kaduna", waste: "65kg Of Plastic", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82" },
  ];

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
        <div className="flex items-center gap-3">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/93f155d89ca134ed94c451037c468ff9a213436b?width=96"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="text-xs text-gray-500">Welcome Recycler,</div>
            <div className="text-lg font-bold text-black">Hahfyeez</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-gray-bg px-3 py-2 rounded-full">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-orange-500 rounded-full" />
          </div>
          <span className="text-xs text-black">0x5439...</span>
          <ChevronDown className="w-3 h-3 text-green-primary rotate-90" />
        </div>
      </div>

      {/* Token Card */}
      <div className="mx-3 my-6 relative">
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
              <span className="text-base">Total Token Payed</span>
              <Eye className="w-5 h-3" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl font-bold">23.</span>
              <span className="text-2xl">00</span>
              <span className="text-xl ml-2">scv</span>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 text-xs px-4 py-2 h-7 rounded-full">
              <Coins className="w-4 h-4 mr-2" />
              Token History
            </Button>
          </div>
        </div>
      </div>

      {/* Confirm Waste Button */}
      <div className="mx-3 mb-6">
        <Button className="w-full bg-green-light text-black hover:bg-green-light/80 h-14 text-sm rounded-full">
          <ClipboardList className="w-7 h-7 mr-4 stroke-green-primary" />
          Confirm Waste
        </Button>
      </div>

      {/* Recycler Toggle */}
      <div className="flex justify-center mb-6">
        <div className="flex gap-4">
          <Button className="bg-black text-white hover:bg-black/90 px-6 py-2 text-xs rounded-full">
            Available Recyler
          </Button>
          <Button
            variant="outline"
            className="border-gray-border text-gray-text hover:bg-gray-50 px-6 py-2 text-xs rounded-full"
          >
            Collector
          </Button>
        </div>
      </div>

      {/* Recycler List */}
      <div className="px-4 pb-24">
        {recyclers.map((recycler, index) => (
          <div key={recycler.id}>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <img
                  src={recycler.avatar}
                  alt={recycler.name}
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <div className="text-sm text-black">{recycler.name}</div>
                  <div className="text-xs text-black">{recycler.location}</div>
                </div>
              </div>
              <div className="text-xs text-black">{recycler.waste}</div>
              <Button className="bg-green-primary text-white hover:bg-green-primary/90 px-4 py-1 text-xs h-7 rounded-full">
                View
              </Button>
            </div>
            {index < recyclers.length - 1 && (
              <div className="w-full h-px bg-gray-border" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 shadow-lg">
        <div className="flex justify-center items-center gap-12 py-3 px-8">
          <div className="flex flex-col items-center gap-2">
            <div className="p-2">
              <Home className="w-6 h-6 text-green-primary fill-green-primary" />
            </div>
            <span className="text-xs text-green-primary font-medium">Home</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Wallet className="w-6 h-6 text-gray-text" />
            <span className="text-xs text-gray-text">My Wallet</span>
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
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ChevronLeft, ClipboardList, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ConfirmWaste() {
  const [wasteId, setWasteId] = useState("");

  const handleSearch = () => {
    if (wasteId.trim()) {
      // Navigate to next section of confirm waste process
      console.log("Searching for waste ID:", wasteId);
    }
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
      </div>
    </div>
  );
}

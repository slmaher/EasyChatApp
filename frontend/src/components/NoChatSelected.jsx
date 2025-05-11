import { MessageSquare } from "lucide-react";
import React from "react";
const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-[#FFB800]/10 flex items-center
             justify-center "
            >
              <MessageSquare className="w-8 h-8 text-[#FFB800]" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to EasyChat!</h2>
        <p className="text-base-content/60">
          No conversation selected
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;

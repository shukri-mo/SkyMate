import { AlertCircle, RefreshCcw } from "lucide-react";
import React from "react";

function ErrorMessage({message,retry}) {
  return (
    <div
      className="bg-red-500 backdrop-blur-xl
     border-red-400/20 rounded-3xl p-8 shadow-2xl"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-red-500/20 rounded-full">
          <AlertCircle className="w-6 h-6 text-red-300" />
        </div>
        <h3 className="text-xl font-semibold text-white">
          Something Went Wrong
        </h3>
      </div>
      <p className="text-white/80 mb-6 leading-relaxed">
 {message}
      </p>
      {/* conditional Rendering */}
      {retry&&(

      <button className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg" onClick={retry}>
        <RefreshCcw className="w-5 h-5" />
        <span className="font-medium"> Try Again</span>
      </button>
      )
      }
    </div>
  );
}

export default ErrorMessage;

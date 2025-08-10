import React from "react";
import "./SparkleLine.css"; // We'll put all your CSS here

const SparkleLine = ({ text }) => {
  return (
    <div class="text-center">
        <div class="flex justify-center">
            <div class="w-28 h-1 sparkle-line mt-6 rounded-full shadow-md mb-2 relative">
               
                <div class="sparkle sparkle-1"></div>
                <div class="sparkle sparkle-2"></div>
                <div class="sparkle sparkle-3"></div>
                <div class="sparkle sparkle-4"></div>
                <div class="sparkle sparkle-5"></div>
                <div class="sparkle sparkle-6"></div>
                <div class="sparkle sparkle-small sparkle-7"></div>
                <div class="sparkle sparkle-small sparkle-8"></div>
            </div>
        </div>
        
    </div>
  );
};

export default SparkleLine;

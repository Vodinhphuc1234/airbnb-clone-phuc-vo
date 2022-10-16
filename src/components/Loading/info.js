import React from "react";

export default function InforLoading() {
  return (
    <div className="animate-pulse flex m-5 space-x-5">
      <div className="h-32 w-56 bg-slate-200 rounded-md"></div>

      <div className="flex-grow space-y-5">
        <div className="h-5 w-full bg-slate-200 rounded"></div>
        <div className="h-5 w-full bg-slate-200 rounded"></div>
        <div className="h-5 w-full bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}

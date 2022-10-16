import React from "react";

export default function SmallLoading() {
  return (
    <div className="animate-pulse shadow-sm flex p-3">
      <div className="h-14 w-14 bg-slate-200 rounded-md"></div>
      <div className="flex-grow ml-3 py-2 space-y-5">
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}

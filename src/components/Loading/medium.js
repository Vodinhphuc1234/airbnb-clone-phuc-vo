import React from "react";

export default function MediumLoading() {
  return (
    <div className="animate-pulse shadow-sm p-3 space-y-5">
      <div className="h-56 w-56 bg-slate-200 rounded-md"></div>
      <div className="h-4 w-56 bg-slate-200 rounded-md"></div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { DemoRequestForm } from "./DemoRequestForm";

export function DemoRequestModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handler(e: CustomEvent) {
      if (e.detail === "open-demo-modal") setOpen(true);
    }
    window.addEventListener(
      "open-demo-modal" as string,
      handler as EventListener
    );
    return () =>
      window.removeEventListener(
        "open-demo-modal" as string,
        handler as EventListener
      );
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Request a Demo"
        className="bg-card relative z-10 w-full max-w-lg rounded-2xl border p-6 shadow-xl sm:p-8"
      >
        <DemoRequestForm isModal onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}

/** Call this to open the demo modal from anywhere */
export function openDemoModal() {
  window.dispatchEvent(
    new CustomEvent("open-demo-modal", { detail: "open-demo-modal" })
  );
}

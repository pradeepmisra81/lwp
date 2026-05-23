"use client";

import { useState } from "react";

export default function PaymentContent() {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);

  const copyToClipboard = async (text: string, type: "id" | "number") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "id") {
        setCopiedId(true);
        setTimeout(() => setCopiedId(false), 2000);
      } else {
        setCopiedNumber(true);
        setTimeout(() => setCopiedNumber(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="pt-[110px] pb-24 min-h-[calc(100vh-105px)] flex items-center relative overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute text-3xl animate-[float_6s_ease-in-out_infinite] pointer-events-none opacity-[0.08] select-none top-[15%] left-[10%]">💳</div>
      <div className="absolute text-3xl animate-[float_6s_ease-in-out_infinite] pointer-events-none opacity-[0.08] select-none bottom-[20%] right-[10%] delay-1000">💰</div>
      <div className="absolute text-2xl animate-[float_5s_ease-in-out_infinite] pointer-events-none opacity-[0.05] select-none top-[60%] left-[8%] delay-500">📐</div>
      <div className="absolute text-2xl animate-[float_5s_ease-in-out_infinite] pointer-events-none opacity-[0.05] select-none top-[25%] right-[15%] delay-1500">📜</div>

      <div className="max-w-[1280px] mx-auto px-6 w-full flex flex-col items-center gap-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center flex flex-col items-center gap-3 max-w-[600px] animate-[fadeInUp_0.6s_ease]">
          <div className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-primary-500 to-accent-600 text-3xl mb-2 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
            💳
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-text-primary tracking-[-0.03em]">
            Payment Options
          </h1>
          <p className="text-base md:text-lg text-text-secondary leading-[1.6]">
            Scan the QR code or use the UPI details below to pay or support <strong className="text-text-primary">Learning With PKM (LWP)</strong> directly.
          </p>
        </div>

        {/* Payment Card */}
        <div className="w-full max-w-[460px] animate-[fadeInUp_0.8s_ease_0.1s_both]">
          <div className="glass-card-premium p-6 sm:p-8 flex flex-col items-center gap-6 text-center">
            
            {/* Mesh background effect */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(249,115,22,0.06),transparent_70%)] animate-[auroraFlow_15s_ease-in-out_infinite] pointer-events-none" />
            
            {/* Badge */}
            <span className="aprasak-badge text-[11px]">
              <span className="dot" />
              Verified Merchant
            </span>

            {/* Payee Name */}
            <div className="flex flex-col gap-1 mt-1">
              <span className="text-xs text-text-muted uppercase tracking-[0.1em] font-bold">Pay To</span>
              <h2 className="text-xl sm:text-2xl font-black text-text-primary tracking-[-0.02em]">
                PRADEEP KUMAR MISRA
              </h2>
            </div>

            {/* QR Code Container */}
            <div className="relative group/qr bg-white p-4 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(249,115,22,0.15)]">
              <img
                src="/payment_qr.jpg"
                alt="UPI Payment QR Code"
                className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] object-contain rounded-lg"
              />
              <div className="absolute inset-0 rounded-2xl border border-[rgba(249,115,22,0.25)] pointer-events-none transition-all duration-300 group-hover/qr:border-primary-500" />
            </div>

            <p className="text-xs text-text-muted max-w-[280px] leading-relaxed">
              Use any UPI App (GPay, PhonePe, Paytm, BHIM, etc.) to scan the QR code above.
            </p>

            <div className="w-full h-[1px] bg-border-subtle my-2" />

            {/* UPI Details */}
            <div className="w-full flex flex-col gap-4">
              
              {/* UPI ID Row */}
              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-xs text-text-muted font-semibold tracking-wide uppercase px-1">UPI ID</span>
                <div className="flex items-center justify-between gap-3 p-3 bg-[rgba(255,255,255,0.02)] border border-border-subtle rounded-xl hover:border-border-light transition-all duration-200">
                  <span className="text-sm font-semibold text-text-primary tracking-wide select-all truncate">
                    Lwp@kotak
                  </span>
                  <button
                    onClick={() => copyToClipboard("Lwp@kotak", "id")}
                    className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-300 ${
                      copiedId
                        ? "bg-green-500/10 text-green-400 border border-green-500/30"
                        : "bg-[rgba(255,255,255,0.05)] text-text-secondary border border-transparent hover:bg-primary-500/10 hover:text-primary-400 hover:border-primary-500/30"
                    }`}
                  >
                    {copiedId ? (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="animate-[scaleIn_0.2s_ease]">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* UPI Number Row */}
              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-xs text-text-muted font-semibold tracking-wide uppercase px-1">UPI Number</span>
                <div className="flex items-center justify-between gap-3 p-3 bg-[rgba(255,255,255,0.02)] border border-border-subtle rounded-xl hover:border-border-light transition-all duration-200">
                  <span className="text-sm font-semibold text-text-primary tracking-wide select-all truncate">
                    8447311324
                  </span>
                  <button
                    onClick={() => copyToClipboard("8447311324", "number")}
                    className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-300 ${
                      copiedNumber
                        ? "bg-green-500/10 text-green-400 border border-green-500/30"
                        : "bg-[rgba(255,255,255,0.05)] text-text-secondary border border-transparent hover:bg-primary-500/10 hover:text-primary-400 hover:border-primary-500/30"
                    }`}
                  >
                    {copiedNumber ? (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="animate-[scaleIn_0.2s_ease]">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

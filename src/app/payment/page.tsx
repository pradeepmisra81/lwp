import type { Metadata } from "next";
import PaymentContent from "./PaymentContent";

export const metadata: Metadata = {
  title: "Payment | LWP",
  description:
    "Support Learning With PKM (LWP) by paying directly via UPI. Scan the QR code or use the provided UPI ID and UPI number to complete your transaction.",
};

export default function PaymentPage() {
  return <PaymentContent />;
}

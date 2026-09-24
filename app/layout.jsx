import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { metadataBase: new URL("https://www.investment-banking.org"), title: { default: "Investment Banking Blog | Finance, Business & Markets", template: "%s | Investment Banking" }, description: "Sourced explainers, case studies, and commentary on banking, markets, business, technology, and public policy.", alternates: { types: { "application/rss+xml": "/rss.xml" } }, icons: { icon: "/assets/branding/investment-banking-favicon.png" } };

export default function RootLayout({ children }) {
  return <html lang="en"><body className="min-h-screen bg-white font-sans text-ink antialiased"><Header />{children}<Footer /></body></html>;
}

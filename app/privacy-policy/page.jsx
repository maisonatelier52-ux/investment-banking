import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["privacy-policy"].metaTitle || pages["privacy-policy"].title, description: pages["privacy-policy"].description, alternates: { canonical: "/privacy-policy" } };
export default function Page() { return <InformationPage pageKey="privacy-policy" />; }

import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["terms-and-conditions"].metaTitle || pages["terms-and-conditions"].title, description: pages["terms-and-conditions"].description, alternates: { canonical: "/terms-and-conditions" } };
export default function Page() { return <InformationPage pageKey="terms-and-conditions" />; }

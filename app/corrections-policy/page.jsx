import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["corrections-policy"].metaTitle || pages["corrections-policy"].title, description: pages["corrections-policy"].description, alternates: { canonical: "/corrections-policy" } };
export default function Page() { return <InformationPage pageKey="corrections-policy" />; }

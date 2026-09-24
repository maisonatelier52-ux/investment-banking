import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["contact"].metaTitle || pages["contact"].title, description: pages["contact"].description, alternates: { canonical: "/contact" } };
export default function Page() { return <InformationPage pageKey="contact" />; }

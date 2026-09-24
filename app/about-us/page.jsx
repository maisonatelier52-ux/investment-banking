import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["about-us"].metaTitle || pages["about-us"].title, description: pages["about-us"].description, alternates: { canonical: "/about-us" } };
export default function Page() { return <InformationPage pageKey="about-us" />; }

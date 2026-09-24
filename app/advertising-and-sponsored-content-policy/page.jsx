import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["advertising-and-sponsored-content-policy"].metaTitle || pages["advertising-and-sponsored-content-policy"].title, description: pages["advertising-and-sponsored-content-policy"].description, alternates: { canonical: "/advertising-and-sponsored-content-policy" } };
export default function Page() { return <InformationPage pageKey="advertising-and-sponsored-content-policy" />; }

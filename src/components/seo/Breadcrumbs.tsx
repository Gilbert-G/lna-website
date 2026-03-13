import { createBreadcrumbJsonLd } from "@/lib/metadata";
import { JsonLd } from "./JsonLd";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbItems = [{ name: "Home", url: "/" }, ...items];
  return <JsonLd data={createBreadcrumbJsonLd(breadcrumbItems)} />;
}

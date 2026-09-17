export const PAGE_META = [
  { id: "hero", label: "Home" },
  { id: "browser", label: "Browser" },
  { id: "products", label: "Products" },
  { id: "dev", label: "Development" },
  { id: "scanner", label: "Scanner" },
  { id: "platform", label: "Platform" },
  { id: "parapin", label: "PArA PIN" },
  { id: "infra", label: "Infra" },
  { id: "contact", label: "Contact" },
] as const;

export const PAGES = PAGE_META.map((page) => page.id);

export const PAGE_INDEX = PAGE_META.reduce<Record<(typeof PAGE_META)[number]["id"], number>>(
  (acc, page, index) => {
    acc[page.id] = index;
    return acc;
  },
  {} as Record<(typeof PAGE_META)[number]["id"], number>,
);

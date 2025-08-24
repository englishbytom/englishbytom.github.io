"use client";

import { useState, useEffect } from "react";
import FAQ from ".";
// import { useLocale } from "next-intl";
import { FAQItem } from ".";

export default function LocalizedFAQ() {
  const locale = 'en';
  const [faqData, setFaqData] = useState<{
    title: string;
    items: FAQItem[];
  } | null>(null);

  useEffect(() => {
    import(`./content/${locale}.js`).then((module) => {
      setFaqData({
        title: module.title, // get the exported title from MDX
        items: module.items, // get the exported items array
      });
    });
  }, [locale]);

  if (!faqData) return null; // or a loading skeleton

  return <FAQ title={faqData.title} items={faqData.items} />;
}

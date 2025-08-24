"use client";

import { useState, useEffect } from "react";
import Nav from ".";
import { useLocale } from "next-intl";

export default function LocalizedNav() {
  const locale = useLocale();
  // const [Content, setContent] = useState<any>(null);
  const [links, setLinks] = useState<{ items: [] } | null>(null);

    useEffect(() => {
    import(`./content/${locale}.js`).then((module) => {
      setLinks({

        items: module.items, // get the exported items array
      });
    });
  }, [locale]);

  if (!links) return null; // or a loading skeleton

  // useEffect(() => {
  //   import(`./content/${locale}.js`).then((module) => {
  //     setContent(() => module.default); // assign default export as component
  //   });
  // }, [locale]);

  // if (!Content) return null; // or a loading skeleton

  return <Nav items={links.items} />;
}

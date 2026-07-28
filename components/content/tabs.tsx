"use client";

import { useId, useState } from "react";

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

/** Hasta/Sağlık Profesyoneli içerik ayrımı için kullanılan sekme bileşeni. */
export function Tabs({ tabs }: { tabs: TabItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key === "ArrowRight") {
      setActiveIndex((index + 1) % tabs.length);
    } else if (event.key === "ArrowLeft") {
      setActiveIndex((index - 1 + tabs.length) % tabs.length);
    }
  }

  return (
    <div>
      <div role="tablist" aria-label="İçerik görünümü" className="flex gap-2 border-b border-border">
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={tab.label}
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${index}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`rounded-t-input px-4 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                isActive ? "border-b-2 border-primary-900 text-primary-900" : "text-text-muted hover:text-primary-900"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`${baseId}-panel-${index}`}
          aria-labelledby={`${baseId}-tab-${index}`}
          hidden={activeIndex !== index}
          className="py-6"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

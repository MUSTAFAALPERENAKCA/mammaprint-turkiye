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
      <div
        role="tablist"
        aria-label="İçerik görünümü"
        className="inline-flex flex-wrap gap-1 rounded-full border border-border bg-surface-muted p-1"
      >
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
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
                isActive
                  ? "bg-primary-900 text-white shadow-soft-lg"
                  : "text-text-muted hover:text-primary-900"
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
          className="animate-fade-up py-8"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

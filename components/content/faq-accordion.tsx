"use client";

import { useId, useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-border rounded-card border border-border bg-surface">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-text-muted">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-4 text-sm text-text-muted">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

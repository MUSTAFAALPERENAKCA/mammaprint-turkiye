/** Metni kelime kelime, kademeli gecikmeyle beliren bir başlığa dönüştürür (yalnızca CSS). */
export function AnimatedWords({
  text,
  startDelay = 0,
  step = 70,
  className = "",
}: {
  text: string;
  startDelay?: number;
  step?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span
            className={`word-in ${className}`}
            style={{ animationDelay: `${startDelay + index * step}ms` }}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}

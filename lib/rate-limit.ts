/**
 * Basit bellek içi rate limiter (T-12). Tek instance geliştirme/küçük ölçek
 * için yeterlidir; çoklu instance production ortamında Redis tabanlı bir
 * çözüme geçiş gerekir (bkz. docs/security-checklist.md, Faz 5).
 */
const attempts = new Map<string, { count: number; windowStart: number }>();

const WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 60_000);
const MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX_REQUESTS ?? 5);

export function checkRateLimit(key: string): { allowed: boolean; retryAfterMs?: number } {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    attempts.set(key, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterMs: WINDOW_MS - (now - entry.windowStart) };
  }

  entry.count += 1;
  return { allowed: true };
}

export function trackClarityEvent(eventName: string) {
  if (typeof window === "undefined") {
    return;
  }

  const clarity = (
    window as typeof window & {
      clarity?: (command: string, eventName: string) => void;
    }
  ).clarity;

  if (clarity) {
    clarity("event", eventName);
  }
}
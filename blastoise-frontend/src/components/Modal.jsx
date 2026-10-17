import { useRef, useId, useEffect } from "react";
import { X } from "lucide-react";
export default function Modal({ title, onClose, children }) {
  const ref = useRef(null);
  const titleId = useId();
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector("input,button,select,textarea")?.focus();
    function keys(e) {
      if (e.key === "Escape") closeRef.current();
      if (e.key === "Tab") {
        const nodes = [
          ...ref.current.querySelectorAll(
            "button:not([disabled]), input:not([disabled]), select, textarea, a[href]",
          ),
        ].filter((n) => n.getClientRects().length);
        const first = nodes[0],
          last = nodes.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener("keydown", keys);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", keys);
      previous?.focus();
    };
  }, []);
  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <section ref={ref} className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <header className="modal-head">
          <div>
            <small>BLASTOISE CLINIC</small>
            <h2 id={titleId}>{title}</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </header>
        {children}
      </section>
    </div>
  );
}

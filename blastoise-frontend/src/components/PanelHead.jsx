import { ArrowUpRight } from "lucide-react";
export default function PanelHead({ title, subtitle, action, onAction }) {
  return (
    <div className="panel-head">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <button className="text-button" onClick={onAction}>
        {action}
        <ArrowUpRight size={15} />
      </button>
    </div>
  );
}

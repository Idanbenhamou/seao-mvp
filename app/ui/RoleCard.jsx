import Link from "next/link";

export function RoleCard({ title, desc, imageUrl, href }) {
  return (
    <div className="roleCard" data-title={title}>
      <style>{`
        .roleCard[data-title="${title}"]::before{ background-image:url('${imageUrl}'); }
      `}</style>

      <div className="roleInner">
        <div className="roleTitle">{title}</div>
        <div className="roleDesc">{desc}</div>
        <Link className="btn roleBtn" href={href}>Continue</Link>
      </div>
    </div>
  );
}

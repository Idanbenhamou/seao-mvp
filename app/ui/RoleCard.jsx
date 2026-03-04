import Link from "next/link";

type RoleCardProps = {
  title: string;
  desc: string;
  imageUrl: string;
  href: string;
};

export function RoleCard({ title, desc, imageUrl, href }: RoleCardProps) {
  return (
    <div className="roleCard" style={{}} aria-label={title}>
      <style>{`
        .roleCard[data-title="${title}"]::before{ background-image:url('${imageUrl}'); }
      `}</style>
      <div className="roleCard" data-title={title}>
        <div className="roleInner">
          <div className="roleTitle">{title}</div>
          <div className="roleDesc">{desc}</div>
          <Link className="btn roleBtn" href={href}>Continue</Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container">
      <div className="card" style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14}}>
        <div style={{fontWeight:800}}>SEAO • Application</div>
        <div style={{display:"flex", gap:10}}>
          <Link className="btn" href="/">Site</Link>
          <Link className="btn" href="/signin">Logout</Link>
        </div>
      </div>
      {children}
    </main>
  );
}

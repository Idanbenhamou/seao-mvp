import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <div className="hero">
        <div className="kicker">SEAO</div>
        <h1 className="h1">La solution intelligente pour gérer les invités, le placement et l’accueil de vos événements</h1>
        <p className="p">
          SEAO est proposé par les salles de réception à leurs clients pour organiser un événement privé :
          liste des invités, plan de placement et accueil fluide le jour J.
        </p>
        <div style={{display:"flex", gap:10, justifyContent:"center", marginTop:16, flexWrap:"wrap"}}>
          <Link className="btn primary" href="/features">Découvrir les fonctionnalités</Link>
          <Link className="btn" href="/signin">Connexion</Link>
        </div>
      </div>

      <div className="features">
        {[
          ["Gestion des invités", "Import CSV/Excel, groupes, côté marié/mariée, recherche rapide."],
          ["Plan de placement", "Attribution tables/places, modifications simples, tables complètes."],
          ["Accueil (Check-in)", "Recherche invité, check-in, affichage table/placement instantané."],
        ].map(([t,d]) => (
          <div className="card" key={t}>
            <h3 className="featureTitle">{t}</h3>
            <p className="featureDesc">{d}</p>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div>
          <div className="smallTitle">Quick Links</div>
          <div className="list">
            <Link href="/about">About</Link>
            <Link href="/features">Features</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          <div className="brand">SEAO</div>
          <div style={{opacity:0.7, fontSize:12}}>© {new Date().getFullYear()} SEAO</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div className="smallTitle">Follow Us</div>
          <div style={{display:"flex", gap:10, justifyContent:"flex-end"}}>
            <span>◎</span><span>◌</span><span>◍</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

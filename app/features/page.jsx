const features = [
  { title: "Gestion des événements", desc: "Créer et centraliser les informations : date/heure, lieu, gestionnaire, producteur, capacité, statut (à venir / passé)." },
  { title: "Gestion des invités", desc: "Import CSV/Excel, ajout manuel, recherche rapide, groupes/familles, côté marié / côté mariée, table attribuée." },
  { title: "Plan de placement", desc: "Tables, nombre de places, attribution invités, modifications faciles, vue tables complètes / places restantes." },
  { title: "Accueil des invités (Check-in)", desc: "Recherche par nom/prénom, check-in, affichage table/placement, suivi arrivées en temps réel." },
  { title: "Gestion des prestataires", desc: "Liste prestataires, type, contact, horaires, notes, suivi simple." },
  { title: "Organisation du déroulement (Line-up)", desc: "Planning, moments clés, horaires, description, modifications." },
  { title: "Suivi de l’événement", desc: "Vue globale : total invités, arrivés, restants, tables pleines, progression." },
];

export default function FeaturesPage() {
  return (
    <main className="container">
      <div className="hero">
        <div className="kicker">SEAO</div>
        <h1 className="h1">Fonctionnalités</h1>
        <p className="p">Page vitrine (avant connexion) — informations uniquement, sans clic sur les modules.</p>
      </div>

      <div className="features">
        {features.map((f) => (
          <div className="card" key={f.title}>
            <h3 className="featureTitle">{f.title}</h3>
            <p className="featureDesc">{f.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

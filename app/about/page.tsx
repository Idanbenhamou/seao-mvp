export default function Page() {
  return (
    <main className="container">
      <div className="hero">
        <div className="kicker">SEAO</div>
        <h1 className="h1">About</h1>
        <p className="p">SEAO simplifie l’organisation des événements, pour les salles et leurs clients.</p>
      </div>
      <div className="card">
        <p className="p" style={maxWidth: "none"}>
          Ceci est une page vitrine (public). Le contenu est modifiable facilement.
        </p>
      </div>
    </main>
  );
}

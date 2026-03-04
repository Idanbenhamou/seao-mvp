import { RoleCard } from "../ui/RoleCard";

export default function SelectRolePage() {
  return (
    <main className="container">
      <div className="hero">
        <div className="kicker">SEAO</div>
        <h1 className="h1">Choisissez votre accès</h1>
        <p className="p">Cet écran s’affiche seulement si l’utilisateur a plusieurs rôles.</p>
      </div>

      <div className="grid3">
        <RoleCard
          title="Accueil"
          desc="Gérez l’arrivée des invités en temps réel. Recherchez un invité, confirmez son arrivée et affichez sa table."
          imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60"
          href="/app/staff"
        />
        <RoleCard
          title="Organisateur"
          desc="Gérez votre événement : invités, plan de placement, prestataires et déroulement (line-up) du jour J."
          imageUrl="https://images.unsplash.com/photo-1529634897861-3a6ac3dd2f9a?auto=format&fit=crop&w=1200&q=60"
          href="/app/organizer"
        />
        <RoleCard
          title="Salle"
          desc="Accédez à l’ensemble des événements de votre établissement et gérez les clients, les salles et les événements."
          imageUrl="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=60"
          href="/app/venue"
        />
      </div>
    </main>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [code, setCode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Placeholder login (demo)
    // - "SALLE" => venue
    // - "MARIES" => organizer
    // - "STAFF" => staff
    // - "MULTI" => role selector (user has multiple roles)
    const c = code.trim().toUpperCase();
    if (c === "MULTI") router.push("/select-role");
    else if (c === "SALLE") router.push("/app/venue");
    else if (c === "MARIES") router.push("/app/organizer");
    else if (c === "STAFF") router.push("/app/staff");
    else alert("Code invalide (demo). Essaye: SALLE, MARIES, STAFF, MULTI");
  }

  return (
    <main className="container">
      <div className="hero">
        <div className="kicker">SEAO</div>
        <h1 className="h1">Connexion</h1>
        <p className="p">
          Démo : entre un code d’accès (SALLE / MARIES / STAFF / MULTI).
        </p>
      </div>

      <div className="card" style={{ maxWidth: 560, margin: "0 auto" }}>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ color: "rgba(245,241,238,0.8)", fontWeight: 700 }}>
              Code d’accès
            </span>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Ex: SALLE"
              style={{
                padding: "12px 14px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(0,0,0,0.25)",
                color: "var(--text)",
                outline: "none",
              }}
            />
          </label>

          <button className="btn primary" type="submit">
            Se connecter
          </button>

          <p className="p" style={{ fontSize: 13, marginTop: 6 }}>
            Cette page est une démo. Ton dev remplacera par Supabase/Auth + RBAC.
          </p>
        </form>
      </div>
    </main>
  );
}

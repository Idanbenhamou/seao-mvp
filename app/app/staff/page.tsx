"use client";

import { useMemo, useState } from "react";

type Guest = { name: string; side: "Marié" | "Mariée"; table: string; arrived: boolean };

const seed: Guest[] = [
  { name: "Marie Dupont", side: "Mariée", table: "Table 7", arrived: false },
  { name: "David Cohen", side: "Marié", table: "Table 3", arrived: true },
  { name: "Sarah Lévy", side: "Mariée", table: "Table 5", arrived: false },
];

export default function StaffPage() {
  const [q, setQ] = useState("");
  const [guests, setGuests] = useState(seed);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return guests;
    return guests.filter(g => g.name.toLowerCase().includes(s));
  }, [q, guests]);

  function toggleArrived(name: string) {
    setGuests(prev => prev.map(g => g.name === name ? { ...g, arrived: !g.arrived } : g));
  }

  const arrivedCount = guests.filter(g => g.arrived).length;

  return (
    <div className="card">
      <h2 style={{marginTop:0}}>Espace Accueil (Staff)</h2>
      <p className="p" style={{maxWidth:"none"}}>Interface iPad-friendly : recherche invité → table → check-in.</p>

      <div style={{display:"grid", gap:10, maxWidth:520}}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un invité (nom / prénom)…"
          style={{
            padding:"12px 14px",
            borderRadius:14,
            border:"1px solid rgba(255,255,255,0.18)",
            background:"rgba(0,0,0,0.25)",
            color:"var(--text)",
            outline:"none",
          }}
        />

        <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
          <div className="btn" style={{cursor:"default"}}>Arrivés: {arrivedCount}/{guests.length}</div>
        </div>

        <div style={{display:"grid", gap:10}}>
          {filtered.map((g) => (
            <div key={g.name} className="card" style={{borderRadius:14}}>
              <div style={{display:"flex", justifyContent:"space-between", gap:10, alignItems:"center"}}>
                <div>
                  <div style={{fontWeight:800}}>{g.name}</div>
                  <div style={{color:"rgba(245,241,238,0.75)", fontSize:13}}>
                    {g.side} • {g.table}
                  </div>
                </div>
                <button className={"btn " + (g.arrived ? "primary" : "")} onClick={() => toggleArrived(g.name)}>
                  {g.arrived ? "Arrivé ✓" : "Marquer arrivé"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

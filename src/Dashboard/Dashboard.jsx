import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    courses: 0,
    events: 0,
    preInscriptions: 0,
    validated: [],
    byCourse: [],
    topCourse: null,
    lowCourse: null,
  });

  useEffect(() => {
    fetch("https://backendwnr2.onrender.com/api/dashboard-stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  const valid =
    stats.validated.find((v) => Number(v.validated) === 1)?.count || 0;

  const invalid =
    stats.validated.find((v) => Number(v.validated) === 0)?.count || 0;

  const total = stats.preInscriptions || 0;

  return (
    <div className="min-h-screen bg-[#fafafa] p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard Admin
          </h1>
          <p className="text-sm text-gray-500">
            Analyse des cours et inscriptions
          </p>
        </div>

        <a
          href="/"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
        >
          Retour au site
        </a>

      </div>

      {/* KPI */}
      <div className="grid grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-xs text-gray-500">Cours</p>
          <p className="text-xl font-bold">{stats.courses}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-xs text-gray-500">Events</p>
          <p className="text-xl font-bold">{stats.events}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-xs text-gray-500">Préinscriptions</p>
          <p className="text-xl font-bold">{total}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-xs text-gray-500">Taux validation</p>
          <p className="text-xl font-bold text-orange-500">
            {total ? Math.round((valid / total) * 100) : 0}%
          </p>
        </div>

      </div>

      {/* STATUS + TOP + LOW */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        {/* STATUS */}
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <h2 className="text-sm font-semibold mb-3">
            Statut inscriptions
          </h2>

          <div className="flex justify-between text-sm">
            <span>Validées</span>
            <span className="text-green-600 font-bold">{valid}</span>
          </div>

          <div className="flex justify-between text-sm mt-2">
            <span>Non validées</span>
            <span className="text-red-500 font-bold">{invalid}</span>
          </div>
        </div>

        {/* TOP COURSE */}
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <h2 className="text-sm font-semibold mb-3">
            Cours le plus demandé
          </h2>

          <p className="text-lg font-bold text-orange-600">
            {stats.topCourse?.title || "-"}
          </p>

          <p className="text-sm text-gray-500">
            {stats.topCourse?.count || 0} inscriptions
          </p>
        </div>

        {/* LOW COURSE */}
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <h2 className="text-sm font-semibold mb-3">
            Cours le moins demandé
          </h2>

          <p className="text-lg font-bold text-red-500">
            {stats.lowCourse?.title || "-"}
          </p>

          <p className="text-sm text-gray-500">
            {stats.lowCourse?.count || 0} inscriptions
          </p>
        </div>

      </div>

      {/* HISTOGRAMME */}
      <div className="bg-white p-4 rounded-xl shadow-sm border">

        <h2 className="text-sm font-semibold mb-4">
          Inscriptions par cours
        </h2>

        <div className="space-y-3">

          {stats.byCourse.map((c, i) => (
            <div key={i}>

              <div className="flex justify-between text-sm mb-1">
                <span>{c.title}</span>
                <span className="text-gray-600">{c.count}</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{
                    width: `${Math.min(
                      (c.count / total) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

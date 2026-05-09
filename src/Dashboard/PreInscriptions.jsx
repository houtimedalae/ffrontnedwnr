import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PreInscriptions() {
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const [preRes, courseRes] = await Promise.all([
        axios.get("https://backendwnr2.onrender.com/api/courses/api/preinscriptions"),
        axios.get("https://backendwnr2.onrender.com/api/courses/api/courses"),
      ]);

      setData(preRes.data);
      setCourses(courseRes.data);
    };

    fetchData();
  }, []);

  const getCourseName = (id) => {
    const c = courses.find((x) => x.id === id);
    return c ? c.title : "—";
  };

  const handleValidate = async (id) => {
    await axios.put(`https://backendwnr2.onrender.com/api/courses/api/preinscriptions/${id}`, {
      validated: 1,
    });

    setData((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, validated: 1 } : p
      )
    );
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `https://backendwnr2.onrender.com/api/courses/api/preinscriptions/${id}`
    );

    setData((prev) => prev.filter((p) => p.id !== id));
  };

  const filtered = data.filter(
    (p) =>
      p.studentName.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#f6f7fb] min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">

        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Préinscriptions
          </h1>
          <p className="text-sm text-gray-500">
            Gestion des demandes étudiants
          </p>
        </div>

        <input
          placeholder="Rechercher..."
          className="border px-3 py-2 rounded-lg text-sm w-64"
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* TABLE CARD */}
      <div className="bg-white border rounded-xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-orange-500 text-white text-xs uppercase">

            <tr>
              <th className="p-3 text-left">Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Cours</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-right pr-4">Actions</th>
            </tr>

          </thead>

          <tbody>

            {filtered.map((p) => (
              <tr
                key={p.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-3 font-medium">
                  {p.studentName}
                </td>

                <td>{p.email}</td>

                <td>{p.phone}</td>

                <td className="text-gray-600">
                  {getCourseName(p.courseId)}
                </td>

                <td className="text-gray-500 text-xs">
                  {p.createdAt
                    ? new Date(p.createdAt).toLocaleString()
                    : "-"}
                </td>

                {/* STATUS */}
                <td>
                  {p.validated == 1 ? (
                    <span className="text-green-600 font-semibold">
                      Validée
                    </span>
                  ) : (
                    <span className="text-red-500 font-semibold">
                      En attente
                    </span>
                  )}
                </td>

                {/* ACTIONS */}
                <td className="text-right pr-4">

                  {p.validated != 1 && (
                    <button
                      onClick={() => handleValidate(p.id)}
                      className="text-green-600 text-xs mr-3"
                    >
                      Valider
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-500 text-xs"
                  >
                    Supprimer
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

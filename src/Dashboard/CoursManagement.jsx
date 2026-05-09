import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CoursManagement() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 10;

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    hours: "",
    category: "",
  });

  const [editingId, setEditingId] = useState(null);

  const fetchCourses = async () => {
    const res = await axios.get("https://backendwnr2.onrender.com/api/courses");
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const current = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await axios.put(
        `http://localhost:5000/api/courses/${editingId}`,
        form
      );
    } else {
      await axios.post("https://backendwnr2.onrender.com/api/courses", form);
    }

    setForm({ title: "", description: "", price: "", hours: "", category: "" });
    setEditingId(null);
    fetchCourses();
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://backendwnr2.onrender.com/api/courses/${id}`);
    fetchCourses();
  };

  const handleEdit = (c) => {
    setForm(c);
    setEditingId(c.id);
  };

  return (
    <div className="p-6 bg-[#f6f7fb] min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Gestion des cours
          </h1>
          <p className="text-sm text-gray-500">
            Administration des formations
          </p>
        </div>

        <input
          placeholder="Rechercher..."
          className="border bg-white px-3 py-2 rounded-lg text-sm w-72"
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* FORM (compact SaaS style) */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl p-4 mb-6 grid grid-cols-5 gap-2"
      >

        <input
          className="border rounded px-2 py-2 text-sm"
          placeholder="Titre"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          className="border rounded px-2 py-2 text-sm"
          placeholder="Prix"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          className="border rounded px-2 py-2 text-sm"
          placeholder="Heures"
          value={form.hours}
          onChange={(e) =>
            setForm({ ...form, hours: e.target.value })
          }
        />

        <input
          className="border rounded px-2 py-2 text-sm"
          placeholder="Catégorie"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <button className="bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600">
          {editingId ? "Modifier" : "Ajouter"}
        </button>

      </form>

      {/* TABLE PRO */}
      <div className="bg-white border rounded-xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
            <tr>
              <th className="text-left p-3">Cours</th>
              <th>Catégorie</th>
              <th>Prix</th>
              <th>Heures</th>
              <th className="text-right pr-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {current.map((c) => (
              <tr key={c.id} className="border-t hover:bg-gray-50">

                <td className="p-3 font-medium text-gray-800">
                  {c.title}
                </td>

                <td className="text-center text-gray-600">
                  {c.category}
                </td>

                <td className="text-center text-orange-600 font-semibold">
                  {c.price} DA
                </td>

                <td className="text-center text-gray-600">
                  {c.hours}h
                </td>

                <td className="text-right pr-4">

                  <button
                    onClick={() => handleEdit(c)}
                    className="text-blue-500 text-xs mr-3"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(c.id)}
                    className="text-red-500 text-xs"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* PAGINATION PRO */}
      <div className="flex justify-center mt-5 gap-2">

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 text-sm rounded ${
              page === i + 1
                ? "bg-orange-500 text-white"
                : "bg-white border"
            }`}
          >
            {i + 1}
          </button>
        ))}

      </div>

    </div>
  );
}

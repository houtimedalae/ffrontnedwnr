import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CoursManagement() {
  const API = "https://backendwnr2.onrender.com/api";

  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  const [newCategory, setNewCategory] = useState("");

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

  /* ================= FETCH ================= */

  const fetchCourses = async () => {
    const res = await axios.get(`${API}/courses`);
    setCourses(res.data);
  };

  const fetchCategories = async () => {
    const res = await axios.get(`${API}/categories`);
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCourses();
    fetchCategories();
  }, []);

  /* ================= CATEGORY ================= */

  const handleAddCategory = async () => {
    if (!newCategory) return;

    await axios.post(`${API}/categories`, { name: newCategory });

    setNewCategory("");
    fetchCategories();
  };

  /* ================= COURSE ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await axios.put(`${API}/courses/${editingId}`, form);
    } else {
      await axios.post(`${API}/courses`, form);
    }

    setForm({
      title: "",
      description: "",
      price: "",
      hours: "",
      category: "",
    });

    setEditingId(null);
    fetchCourses();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/courses/${id}`);
    fetchCourses();
  };

  const handleEdit = (c) => {
    setForm(c);
    setEditingId(c.id);
  };

  /* ================= FILTER ================= */

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);

  const current = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="p-6 bg-[#f6f7fb] min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between mb-6">

        <div>
          <h1 className="text-xl font-bold">Gestion des cours</h1>
          <p className="text-sm text-gray-500">Admin panel</p>
        </div>

        <input
          placeholder="Rechercher..."
          className="border px-3 py-2 rounded-lg text-sm w-72"
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* CATEGORY CREATION */}
      <div className="bg-white p-4 rounded-xl mb-4 flex gap-2">

        <input
          placeholder="Nouvelle catégorie"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border px-3 py-2 rounded text-sm flex-1"
        />

        <button
          onClick={handleAddCategory}
          className="bg-orange-500 text-white px-4 rounded"
        >
          Ajouter
        </button>

      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl mb-6 grid grid-cols-5 gap-2"
      >

        <input
          placeholder="Titre"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border px-2 py-2 rounded text-sm"
        />

        <input
          placeholder="Prix"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border px-2 py-2 rounded text-sm"
        />

        <input
          placeholder="Heures"
          value={form.hours}
          onChange={(e) => setForm({ ...form, hours: e.target.value })}
          className="border px-2 py-2 rounded text-sm"
        />

        {/* 🔥 SELECT CATEGORY */}
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border px-2 py-2 rounded text-sm"
        >
          <option value="">Choisir catégorie</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        <button className="bg-orange-500 text-white rounded text-sm">
          {editingId ? "Modifier" : "Ajouter"}
        </button>

      </form>

      {/* TABLE */}
      <div className="bg-white rounded-xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-xs uppercase">
            <tr>
              <th className="p-3 text-left">Cours</th>
              <th>Catégorie</th>
              <th>Prix</th>
              <th>Heures</th>
              <th className="text-right pr-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {current.map((c) => (
              <tr key={c.id} className="border-t hover:bg-gray-50">

                <td className="p-3">{c.title}</td>
                <td className="text-center">{c.category}</td>
                <td className="text-center text-orange-600">
                  {c.price} DA
                </td>
                <td className="text-center">{c.hours}</td>

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

      {/* PAGINATION */}
      <div className="flex justify-center mt-4 gap-2">

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1
                ? "bg-orange-500 text-white"
                : "border"
            }`}
          >
            {i + 1}
          </button>
        ))}

      </div>

    </div>
  );
}

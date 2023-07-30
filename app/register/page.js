"use client"
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importez le hook useRouter
import SecureRouteLogin from "@/components/LoggedSecureRouter";

const Register = () => {
    const router = useRouter(); // Initialisez le router
    const [form, setForm] = useState({
        username: "",
        password: "",
        adr: "",
        email: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.username || !form.password || !form.adr || !form.email) {
            alert("Tous les champs sont requis.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                // Enregistrement réussi, naviguer vers la page de connexion
                router.push("/login");
            } else {
                throw new Error("Échec de la création d'utilisateur");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return (
        <SecureRouteLogin>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h1 className="text-3xl font-semibold mb-6">Page d'Inscription</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">Nom d'utilisateur:</label>
                            <input
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Email:</label>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Mot de passe:</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Adresse:</label>
                            <input
                                type="text"
                                name="adr"
                                value={form.adr}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            S'inscrire
                        </button>
                    </form>
                </div>
            </div>
        </SecureRouteLogin>

    );
};

export default Register;

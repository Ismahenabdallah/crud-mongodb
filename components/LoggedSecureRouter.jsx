

"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SecureRouteLogin = ({ children }) => {
    const router = useRouter();

    // Vérifier l'authentification à chaque changement de route
    useEffect(() => {
        const isAuthenticated = checkUserAuthentication(); // Fonction pour vérifier l'authentification
        if (isAuthenticated) {
            router.push("/"); // Rediriger vers la page de connexion si non authentifié
        }
    }, [router]);

    // Fonction pour vérifier si l'utilisateur est authentifié (exemple)
    const checkUserAuthentication = () => {
        // Vérifiez si le jeton d'authentification est présent (par exemple, dans un cookie ou localStorage)
        const authToken = localStorage.getItem("token");
        return !!authToken; // Renvoie true si le jeton est présent, sinon false
    };

    return <>{children}</>; // Rendre le contenu des routes sécurisées
};

export default SecureRouteLogin;

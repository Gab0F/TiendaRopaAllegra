import { useRef } from "react";

// Cambiar a export default para que sea compatible con import useLogin from ...
export default function useLogin() {
  const wrapperRef = useRef(null);
  const formLoginRef = useRef(null);

  // Mostrar formulario de registro
  const showRegister = () => {
    wrapperRef.current?.classList.add("active");
  };

  // Mostrar formulario de login
  const showLogin = () => {
    wrapperRef.current?.classList.remove("active");
  };

  // Mostrar popup de login
  const showPopup = () => {
    wrapperRef.current?.classList.add("active-popup");
  };

  // Cerrar popup de login
  const closePopup = () => {
    wrapperRef.current?.classList.remove("active-popup");
  };

  // Lógica de login
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = formLoginRef.current;
    const email = form?.elements["email"]?.value;
    const password = form?.elements["password"]?.value;

    if (!email || !password) {
      alert("Completa todos los campos");
      return false;
    }

    const formData = new FormData(form);
    formData.append("function", "login");

    try {
      const response = await fetch("asset/data/Users.php", {
        method: "POST",
        body: formData,
      });
      // Maneja la respuesta aquí
      // const data = await response.json();
      // ...
    } catch (error) {
      alert("Error en el login");
    }
  };

  return {
    wrapperRef,
    formLoginRef,
    showRegister,
    showLogin,
    showPopup,
    closePopup,
    handleLogin,
  };
}
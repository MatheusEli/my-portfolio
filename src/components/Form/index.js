import axios from "axios";
import { useState, useEffect } from "react";

export default function Form() {
  const [envioHabilitado, setEnvioHabilitado] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [dados, setDados] = useState({
    name: "",
    email: "",
    text: "",
  });

  const clear = () => {
    setDados({
      name: "",
      email: "",
      text: "",
    });
  };

  const handleChange = (name, value) => {
    if (name === "email") {
      validateEmail(value);
    }
    setDados({
      ...dados,
      [name]: value,
    });
  };

  useEffect(() => {
    const { name, email, text } = dados;

    const todosCamposPreenchidos =
      name.trim() !== "" && email.trim() !== "" && text.trim() !== "";

    setEnvioHabilitado(todosCamposPreenchidos);
  }, [dados]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://matheuseli-portfolio.netlify.app/.netlify/functions/send-email', {
        nome: dados.name,
        email: dados.email,
        message: dados.text,
      });
      clear();
    } catch (error) {
      console.log(error);
    }

    clear();
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input-box">
        <input
          type="text"
          placeholder="name"
          value={dados.name}
          onChange={(event) => handleChange("name", event.target.value)}
        />
      </div>
      <div className="form__input-box">
        <input
          type="email"
          placeholder="email"
          value={dados.email}
          style={{
            borderBottom: isValidEmail ? "" : "1px solid #FF6F5B",
          }}
          onChange={(event) => handleChange("email", event.target.value)}
        />
        {!isValidEmail && (
          <p
            style={{
              marginTop: "0",
              textAlign: "right",
              color: "#FF6F5B",
              textTransform: "none",
              fontSize: "1.2rem",
              marginLeft: "auto",
            }}
          >
            Sorry, invalid format here
          </p>
        )}
      </div>
      <div className="form__input-box">
        <textarea
          placeholder="message"
          value={dados.text}
          onChange={(event) => handleChange("text", event.target.value)}
        />
      </div>

      <button disabled={!envioHabilitado}>Send Message</button>
    </form>
  );
}

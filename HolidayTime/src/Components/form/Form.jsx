import { useState } from "react";
import { Forma,Title } from "./form.styled";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Chill this is test form)");
    setFormData({
      firstName: "",
      lastName: "",
    });
  };
  return (
    <Forma onSubmit={handleSubmit}>
      <Title>Зворотній зв’язок</Title>
      <label>
        <h3>Ім’я</h3>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <h3>Номер телефону</h3>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Запросити виклик</button>
    </Forma>
  );
};

export default Form;

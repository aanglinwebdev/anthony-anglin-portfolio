function FormInput({ label, name, type="text", value, onChange, error }) {
  return (
    <div style={{ marginBottom: "15px" }}>

      <label>{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  );
}

export default FormInput;
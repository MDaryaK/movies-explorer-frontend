import "./index.css";

export default function Input({ caption, error, ...props }) {
  return (
    <label className={`input ${error ? "input-error" : ""}`}>
      <span className="input__name">{caption}</span>
      <input type="text" {...props} />
      {error && (
        <span className="input__error">{error}</span>
      )}
    </label>
  );
}

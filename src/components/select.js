export default ({ options }) => {
  return (
    <>
      <select>
        {options.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </select>
      <style jsx>{`
        select {
        }
      `}</style>
    </>
  );
};

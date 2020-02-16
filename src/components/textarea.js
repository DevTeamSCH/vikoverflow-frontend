// TODO disabled state

export default ({ value, onChange, placeholder, rows = 4 }) => (
  <>
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />
    <style jsx>{`
      textarea {
        background: var(--accents-3);
        color: var(--fg);
        border: 2px solid var(--accents-3);
        padding: calc(0.75 * var(--gap) - 2px) calc(var(--gap) - 2px);
        font-size: inherit;
        transition: all var(--transition);
        flex: 1;
        width: 100%;
        line-height: inherit;
        vertical-align: middle;

        /* removing safari border */
        -webkit-appearance: none;
        border-radius: 0;

        /* disabling resize */
        resize: none;
      }

      textarea:focus {
        outline: 0;
        border-color: var(--fg);
      }
    `}</style>
  </>
);

import { useState } from "react";
import Router from "next/router";

import Button from "../components/button";
import TextArea from "../components/textarea";
import TextField from "../components/textfield";

export default () => {
  const [text, setText] = useState("");

  function handleSubmit (e) {
    e.preventDefault();
    (async function setDisplayName () {
      await fetch("/api/v1/auth/display-name/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ displayName: text })
      });
      Router.push("/");
    })();
  }
  return (
    <main className="container">
      <h1>Kérlek, válassz magadnak felhasználónevet</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          value={text}
          autoFocus
          onChange={e => setText(e.target.value)}
        />
        <Button type="submit">Tovább</Button>
      </form>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        h1 {
          font-size: 16px;
          font-weight: 400;
          text-align: center;
        }

        form > :global(input) {
          margin-right: var(--gap-half);
        }
      `}</style>
    </main>
  );
};

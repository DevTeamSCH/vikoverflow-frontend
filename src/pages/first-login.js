import { useRouter } from "next/router";

import Page from "../components/page";
import Button from "../components/button";

export default () => {
  const router = useRouter();
  function onClick (e) {
    (async function setDisplayName () {
      await fetch("/api/v1/auth/display-name/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ displayName: "Den" })
      });
    })();
  }
  return (
    <Page pageTitle="First login">
      <Button onClick={onClick}>Go</Button>
    </Page>
  );
};

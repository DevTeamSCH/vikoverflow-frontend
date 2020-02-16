import Page from "../components/page";
import Textarea from "../components/textarea";
import Button from "../components/button";

import Input from "../components/input";
import Select from "../components/select";

export default () => (
  <Page>
    <div className="container">
      <Input placeholder="Title..." />
      <Textarea placeholder="Lorem ipsum..." />
      <div className="actions">
        <Select
          options={[
            { id: "egyeni", label: "barmi" },
            { id: "egyeni2", label: "barmiasdasd" },
            { id: "egyeni3", label: "barmiasd" }
          ]}
        ></Select>
        <Button>Küldés</Button>
      </div>
    </div>

    <style jsx>{`
      .container {
        margin-top: var(--gap-double);
      }

      .container > :global(* + *) {
        margin-top: var(--gap);
      }

      .actions {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </Page>
);

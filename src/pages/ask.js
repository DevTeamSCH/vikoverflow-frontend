import { useState } from "react";
import Page from "../components/page";
import Textarea from "../components/textarea";
import Button from "../components/button";
import Input from "../components/input";
import Popover, { Menu, Item } from "../components/popover";
import Tag, { Row as TagRow } from "../components/tag";

const debugTags = [
  { id: 1, name: "targykod" },
  { id: 2, name: "valami" },
  { id: 3, name: "tag3" }
];

export default () => {
  const [tags, setTags] = useState([]);

  return (
    <Page>
      <div className="container">
        <Input placeholder="Title..." />
        <Textarea placeholder="Lorem ipsum..." />
        <div className="actions">
          <div className="popover-container">
            <Popover trigger={<Button secondary>Add tags</Button>}>
              <Menu>
                <Item>
                  <input placeholder="Search tags.." />
                </Item>
                {debugTags
                  .filter(t => !tags.includes(t))
                  .map((t, i) => (
                    <Item
                      key={i}
                      onClick={() => {
                        setTags([...tags, t]);
                      }}
                    >
                      {t.name}
                    </Item>
                  ))}
              </Menu>
            </Popover>
          </div>

          {tags?.length > 0 && (
            <TagRow className="tag-row">
              {tags.map((t, i) => (
                <Tag
                  deletable
                  onDelete={() => setTags(tags.filter(_t => _t.id !== t.id))}
                  key={i}
                  {...t}
                />
              ))}
            </TagRow>
          )}

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
        }

        .actions > :global(*:last-child) {
          margin-left: auto;
        }

        .actions :global(.tag-row) {
          margin-left: var(--gap);
        }

        .popover-container {
          display: flex;
          flex-direction: row;
        }

        input {
          font: inherit;
          color: inherit;
          border: 0;
          background: transparent;
        }

        input:focus,
        input:active {
          outline: 0;
        }
      `}</style>
    </Page>
  );
};

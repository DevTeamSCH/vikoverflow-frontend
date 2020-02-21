import { useState } from "react";
import Page from "../components/page";
import Textarea from "../components/textarea";
import Button from "../components/button";
import Input from "../components/input";
import Popover, { Menu, Item } from "../components/popover";
import Tag, { Row as TagRow } from "../components/tag";

const debugTags = [
  { id: 1, name: "tag1" },
  { id: 2, name: "tag2" },
  { id: 2, name: "tag2" }
];

export default () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [showTagInput, setShowTagInput] = useState(false);
  const [tags, setTags] = useState([]);

  return (
    <Page>
      <div className="container">
        <Input placeholder="Title..." />
        <Textarea placeholder="Lorem ipsum..." />
        <div className="actions">
          {tags?.length && (
            <TagRow className="tag-row">
              {tags.map((t, i) => (
                <Tag key={i} {...t} />
              ))}
            </TagRow>
          )}
          {showTagInput ? (
            <div className="popover-container">
              <Popover
                open={popoverOpen}
                onOpen={() => setPopoverOpen(true)}
                onClose={() => setPopoverOpen(false)}
                trigger={
                  <Input className="tag-input" placeholder="Search tags.." />
                }
              >
                <Menu>
                  {debugTags.map((t, i) => (
                    <Item
                      key={i}
                      onClick={() => {
                        setTags([...tags, t]);
                        setPopoverOpen(false);
                      }}
                    >
                      {t.name}
                    </Item>
                  ))}
                </Menu>
              </Popover>
              <Button
                tertiary
                className="done-button"
                onClick={() => setShowTagInput(false)}
              >
                Done
              </Button>
            </div>
          ) : (
            <Button secondary onClick={() => setShowTagInput(true)}>
              Add tags
            </Button>
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
          margin-right: var(--gap);
        }

        .container :global(.tag-input) {
          width: 200px;
        }

        .container :global(.tag-input):focus {
          border-color: var(--accents-2);
        }

        .popover-container {
          display: flex;
          flex-direction: row;
        }

        .popover-container > :global(.done-button) {
          margin-left: var(--gap-half);
        }
      `}</style>
    </Page>
  );
};

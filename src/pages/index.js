import Button from "../components/button";
import Input from "../components/input";
import Page from "../components/page";
import Checkbox from "../components/checkbox";
import Question from "../components/question";
import {
  Copy,
  ArrowRight,
  Trash,
  User,
  ArrowUp,
  ArrowDown
} from "react-feather";

export default () => (
  <Page pageTitle="Főoldal">
    <h1>Hali!</h1>
    <p>
      Vizsgák óta volt egy kis időm, perem csináltam egy design systemet,
      kiindulásnak csak jó lesz :D
    </p>
    <h2>Atomok</h2>
    <div className="line">
      <Input placeholder="Placeholder text" />
    </div>
    <div className="line">
      <Checkbox>Label text</Checkbox>
    </div>
    <div className="line">
      <Button>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button tertiary>Tertiary</Button>
    </div>
    <div className="line">
      <Button>
        <Copy size={24} />
        Primary w/ icon
      </Button>
      <Button secondary>
        <ArrowRight size={24} />
        Secondary w/ icon
      </Button>
      <Button tertiary>
        <ArrowUp size={24} />
        Tertiary w/ icon
      </Button>
    </div>
    <div className="line">
      <Button small>Small</Button>
      <Button small secondary>
        Small secondary
      </Button>
      <Button small tertiary>
        Small tertiary
      </Button>
    </div>
    <div className="line">
      <Button small>
        <User size={21} />
        Small w/ icon
      </Button>
      <Button small secondary>
        <Trash size={21} />
        Small secondary w/ icon
      </Button>
      <Button small tertiary>
        <Trash size={21} />
        Small tertiary w/ icon
      </Button>
    </div>
    <div className="line">
      <Button small iconOnly tertiary>
        <ArrowUp size={24} />
      </Button>
      <Button small iconOnly tertiary>
        <ArrowDown size={24} />
      </Button>
    </div>
    <h2>Molekulák</h2>
    <div className="line">
      <form>
        <Input placeholder="Placeholder text" />
        <Button>Submit</Button>
      </form>
    </div>
    <div className="line">
      <Question />
    </div>
    <style jsx>{`
      .line {
        display: flex;
        align-items: center;
        margin: 1rem 0;
      }

      .line > :global(*:not(:first-child)) {
        margin-left: 1rem;
      }

      h2 {
        margin-top: 3rem;
      }

      form {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 0.3fr;
        grid-column-gap: 1rem;
      }
    `}</style>
  </Page>
);

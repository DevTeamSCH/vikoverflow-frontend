import Logo from "./logo";
import Button from "./button";
import { User } from "react-feather";

export default () => (
  <header>
    <div className="content">
      <Logo />
      <Button small tertiary>
        <User size={21} />
        Belépés
      </Button>
    </div>
    <style jsx>{`
      header {
        border-bottom: 2px solid var(--gray);
        top: 0;
        position: sticky;
        background: var(--dark-gray);
      }
      .content {
        width: calc(1.5 * var(--main-content));
        max-width: 100%;
        padding: 0 1rem;
        margin: 0 auto;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </header>
);

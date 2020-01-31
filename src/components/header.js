import { useState, useEffect } from "react";
import cn from "classnames";
import Logo from "./logo";
import Button from "./button";
import { User } from "react-feather";

export default () => {
  const [active, setActive] = useState(false);
  const toggleMenu = flag => setActive(flag ?? !active);
  const closeMenu = () => toggleMenu(false);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <header>
      <div className="content">
        <Logo />
        <nav className={cn({ active })}>
          <Button small tertiary>
            <User size={21} />
            Belépés
          </Button>
        </nav>
        <button
          onClick={() => toggleMenu()}
          className={cn("burger", { active })}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
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

        .burger {
          display: none;
          position: relative;
          height: 24px;
          width: 24px;
          padding: 0;
          border: 0;
          background: none;
          z-index: 3;
        }

        .burger:focus {
          outline: none;
        }

        .line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          width: 24px;
          background: var(--white);
          transition: all var(--transition);
        }

        .line:nth-child(1) {
          top: 4px;
        }

        .line:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        .line:nth-child(3) {
          bottom: 4px;
        }

        @media (max-width: 640px) {
          nav {
            display: none;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: var(--dark-gray);
            padding: calc(6 * var(--gap)) var(--gap) 0;
            z-index: 2;
          }

          .burger,
          nav.active {
            display: block;
          }

          .burger.active .line:nth-child(1) {
            transform: rotate(-45deg);
            top: 12px;
          }

          .burger.active .line:nth-child(2) {
            opacity: 0;
          }

          .burger.active .line:nth-child(3) {
            transform: rotate(45deg);
            bottom: 10px;
          }
        }
      `}</style>
    </header>
  );
};

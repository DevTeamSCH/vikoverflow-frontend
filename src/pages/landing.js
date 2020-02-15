import Page from "../components/page";
import { ArrowUp, ArrowDown, FileText, Activity } from "react-feather";

export default () => (
  <Page wide>
    <div className="hero">
      <h1>
        Platform, ahol <span className="highlight">biztosan</span> megtalálod
        amit keresel.
      </h1>
      <h2>
        Szólítsd meg szaktársaid, kérj szakmai segítséget és
        <br /> segítsd a közösséget saját tanácsaiddal.
      </h2>
      <div className="points">
        <div className="point">
          <div className="point__header">
            <span className="point__header__icon">
              <ArrowUp />
              <ArrowDown />
            </span>
            <h3>Pontrendszer</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            efficitur massa.
          </p>
        </div>
        <div className="point">
          <div className="point__header">
            <span className="point__header__icon">
              <FileText />
            </span>
            <h3>Valami</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            efficitur massa.
          </p>
        </div>
        <div className="point">
          <div className="point__header">
            <span className="point__header__icon">
              <Activity />
            </span>
            <h3>Valami</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            efficitur massa.
          </p>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding-top: 4rem;
          text-align: center;
        }

        h1 {
          font-size: 80px;
          letter-spacing: -0.05em;
          line-height: 1.1;
          margin: 0;
        }

        h2 {
          font-size: 24px;
          letter-spacing: -0.019em;
          line-height: 1.35;
          font-weight: 500;
        }

        .highlight {
          background: var(--accents-3);
          padding: 0 0.5rem 0 0.3rem;
        }

        .points {
          border-top: 2px solid var(--accents-3);
          margin-top: 3rem;
          padding-top: 3rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 3rem;
        }

        .point {
          display: grid;
          grid-template-rows: auto 1fr;
          gap: var(--gap-half);
        }

        .point p {
          margin: 0;
        }

        .point__header {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .point__header h3 {
          font-weight: 500;
          margin: 0;
        }

        .point__header__icon {
          display: flex;
          align-items: center;
          margin-right: var(--gap-half);
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 40px;
          }
          h2 {
            font-size: 21px;
            letter-spacing: 0;
          }
        }
      `}</style>
    </div>
  </Page>
);

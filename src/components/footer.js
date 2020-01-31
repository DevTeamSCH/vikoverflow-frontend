export default () => (
  <footer>
    <div className="content">
      <p>Tudom nagyon szeretitek a footereket, szóval csináltam azt is 😉</p>
      <p>© {new Date().getFullYear()} DevTeam && Bence epikus kollabja</p>
    </div>
    <style jsx>{`
      footer {
        border-top: 2px solid var(--accents-3);
      }
      .content {
        width: var(--main-content);
        max-width: 100%;
        margin: 0 auto;
        padding: calc(2 * var(--gap)) 1rem calc(4 * var(--gap));
      }
    `}</style>
  </footer>
);

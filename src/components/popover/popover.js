import { useEffect } from "react";
import cx from "clsx";

// TODO trigger  item should stay active

export default ({ trigger, children, open, onOpen, onClose }) => {
  const handleKeyDown = e => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className={cx("popover", { open })}>
      <div onClick={onClose} className="click-away" />

      <div onClick={onOpen} className="trigger">
        {trigger}
      </div>

      <div className="menu">
        {open && <div className="inner">{children}</div>}
      </div>

      <style jsx>{`
        .popover {
          position: relative;
        }

        /* Ghetto click-away >:) */
        .popover.open .click-away:before {
          content: "";
          background: rgba(0, 0, 0, 0);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          cursor: default;
          z-index: 2;
        }

        .popover.open .menu {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 3;
          animation: fadeIn var(--transition);
        }

        .inner {
          position: absolute;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

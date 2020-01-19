import styles from "./button.module.css";
import cn from "classnames";

// TODO itt egy pelda, hogy "big", "disabled", "small" es tarsai propokkal hogyan kell a css-t valtoztatni

export default ({ children, peldaProp, ...rest }) => (
  <button
    className={cn(styles.default, peldaProp && styles.peldaProp)}
    {...rest}
  >
    {children}
  </button>
);

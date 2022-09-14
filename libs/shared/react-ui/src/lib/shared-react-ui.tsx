import styles from './shared-react-ui.module.scss';

/* eslint-disable-next-line */
export interface SharedReactUiProps {}

export function SharedReactUi(props: SharedReactUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedReactUi!</h1>
    </div>
  );
}

export default SharedReactUi;

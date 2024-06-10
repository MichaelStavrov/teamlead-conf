import { CSSProperties, FC, ReactNode } from 'react';
import styles from './CardLayout.module.scss';

interface CardLayoutProps {
  children: ReactNode;
  title?: string;
  transparent?: boolean;
  p?: CSSProperties['padding'];
  h?: CSSProperties['height'];
  gap?: CSSProperties['gap'];
}

const CardLayout: FC<CardLayoutProps> = ({ children, title, p, transparent, h, gap }) => {
  return (
    <div style={{ height: h }} className={styles.layout}>
      <div
        style={{ padding: p, backgroundColor: transparent ? 'transparent' : undefined, gap }}
        className={styles.card}
      >
        {title && <span className={styles.title}>{title}</span>}

        {children}
      </div>
    </div>
  );
};

export default CardLayout;

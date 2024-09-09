'use client';

import React from 'react';
import Link from 'next/link';
import styles from './InfoBanner.module.scss';
import HandSVG from './UI/HandSvg';

type InfoBannerProps = {
  suptitle?: string;
  title: string;
  buttonText: string;
  buttonUrl: string;
  buttonOnClick?: () => void;
  diagonalBg?: boolean;
};

export default function InfoBanner({
  suptitle,
  title,
  buttonText,
  buttonUrl,
  buttonOnClick,
  diagonalBg,
}: InfoBannerProps) {
  return (
    <div
      className={`${styles.bannerWrapper} ${diagonalBg && styles.diagonalBg}`}
    >
      <div className={styles.banner}>
        <HandSVG className={styles.image} />
        <div className={styles.titleBlock}>
          <div>
            {suptitle && <h4 className={styles.suptitle}>{suptitle}</h4>}
            <h1 className={styles.title}>{title}</h1>
          </div>
          <Link
            className="button"
            href={buttonUrl}
            onClick={buttonOnClick}
            prefetch
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

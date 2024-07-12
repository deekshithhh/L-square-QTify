import React from "react";
import headphone from "../../assets/headphone.png";
import styles from './heroimage.module.css'

export default function HeroImage() {
  return (
    <div className={styles.heroimage}>
      <div>
        <div>100 Thousand Songs, ad-free</div>
        <div>Over thousands podcast episodes</div>
      </div>
      <div>
        <img src={headphone} alt="Headphones" width={212} />
      </div>
    </div>
  );
}

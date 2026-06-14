import { useState } from 'react';
import styles from './ContactButtons.module.css';
import { PiEnvelopeSimple } from 'react-icons/pi';
import { FaMapMarkerAlt, FaFax } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

function Button({ Icon, text, iconClass, isActive, onPointerEnter }) {
  return (
    <div
      className={`${styles.button}${isActive ? ` ${styles['button--active']}` : ''}`}
      onPointerEnter={onPointerEnter}
    >
      <div className={styles.button_icon_wrap}>
        <Icon
          className={`${styles.button_icon}${iconClass ? ` ${styles[iconClass]}` : ''}`}
        />
      </div>
      <span>{text}</span>
    </div>
  );
}

export default function ContactButtons() {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div
      className={styles.contact__buttons}
      onPointerLeave={() => setActiveButton(null)}
    >
      <Button
        Icon={PiEnvelopeSimple}
        iconClass="button_icon--lg"
        isActive={activeButton === 0}
        onPointerEnter={() => setActiveButton(0)}
        text="admin@atriumphysiotherapy.com"
      />
      <Button
        Icon={FaMapMarkerAlt}
        isActive={activeButton === 1}
        onPointerEnter={() => setActiveButton(1)}
        text={
          <>
            340 Midpark Way SE - Suite 140
            <br />
            Calgary, AB, T2X 1P1
          </>
        }
      />
      <Button
        Icon={FaPhone}
        isActive={activeButton === 2}
        onPointerEnter={() => setActiveButton(2)}
        text="+1(403)-255 4461"
      />
      <Button
        Icon={FaFax}
        isActive={activeButton === 3}
        onPointerEnter={() => setActiveButton(3)}
        text="+1(403)-259 8776"
      />
    </div>
  );
}

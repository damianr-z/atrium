import styles from './ContactButtons.module.css';
import { PiEnvelopeSimple } from 'react-icons/pi';
import { FaMapMarkerAlt, FaFax } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

function Button({ Icon, text, iconClass }) {
  return (
    <div className={styles.button}>
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
  return (
    <div className={styles.contact__buttons}>
      <Button
        Icon={PiEnvelopeSimple}
        iconClass="button_icon--lg"
        text="admin@atriumphysiotherapy.com"
      />
      <Button
        Icon={FaMapMarkerAlt}
        text={
          <>
            340 Midpark Way SE - Suite 140
            <br />
            Calgary, AB, T2X 1P1
          </>
        }
      />
      <Button Icon={FaPhone} text="+1(403)-255 4461" />
      <Button Icon={FaFax} text="+1(403)-259 8776" />
    </div>
  );
}

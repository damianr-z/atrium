import styles from './StaffSection.module.css';
import { Link } from 'react-router-dom';
import { Fragment, useRef } from 'react';

const data = [
  {
    img: '/hala.webp',
    name: 'Hala Basily',
    position: 'Clinic Director',
    info: [
      'As the Clinic Director and Senior Physiotherapist at Atrium Physiotherapy Clinic, I oversee the operations and quality of services of a multidisciplinary team of health professionals. I have more than 20 years of experience in leading and managing a physiotherapy and massage therapy clinic, with a focus on providing personalized and evidence-based care to our clients.',
      "My core competencies include spine and manual therapy, exercise prescription, healthcare management, and sports medicine. I have a Bachelor's degree in Physical Therapy from the Faculty of Physical Therapy, Cairo University, Egypt. I am passionate about helping people recover from injuries, improve their mobility, and enhance their well-being. My mission is to deliver excellence in physiotherapy, and to promote a culture of collaboration, innovation, and continuous learning among our staff and partners.",
    ].join('\n'),
  },
  {
    img: '/Michelle-Herring.webp',
    name: 'Michelle Herring',
    position: 'Office Manager',
    info: [
      'Originally from England, I emigrated to Canada in 2010 and have since built a career centered on patient care and clinical excellence. With a background spanning dental assisting and large-scale hospital administration I solidified my expertise by completing the Medical Office Assistant program in 2017.',
      "Since joining Atrium Physiotherapy in 2021, I have been dedicated to ensuring every patient's experience is a pleasant, welcoming, and seamless one. I believe that a positive environment is the first step toward a great recovery.",
      'Outside of the clinic, you will usually find me hiking, paddleboarding, or exploring the mountains with my two daughters and the family dog.',
    ].join('\n'),
  },
  {
    img: '/himani.webp',
    name: 'Himani Goyal, MPT, B.Sc.PT, CAFCI',
    position: 'Pelvic Floor and Vestibular Rehab Physiotherapist',
    info: [
      "Himani\'s journey with physiotherapy began at an early age of 15, when her grandmother's spinal injury at age 55 left her bedridden. Physiotherapy created a special place in her heart when the physiotherapist made her grandma mobile enough to be able to sit and feed herself and adapt to a new way of living against all hopes.",
      'She has been a physiotherapist since 2005 when she finished her Bachelors in Physiotherapy. She pursued her Masters in Physiotherapy from 2006-2008 along with her successful practice.',
      'She is a trained Mulligan and McKenzie therapist and has done Cyriax courses empowering her strong diagnostic skills. She is a certified Pelvic Floor therapist and Vestibular therapist.',
      "She has been using needles in her practice since 2018 and combines IMS and acupuncture to get the best out of needles. She has expertise in treating musculoskeletal injuries, spinal injuries, neurological conditions, women\'s health, and geriatrics, as well as cardiorespiratory physiotherapy.",
      'Her treatment approach involves a thorough and comprehensive biopsychosocial assessment followed by highly customised hands-on treatments and education about maintenance of a pain/symptom-free state. She focuses on prevention by optimizing posture and the biomechanics of our body.',
    ].join('\n'),
  },
  {
    img: '/tunde-Okikiolu.webp',
    name: 'Tunde Okikiolu, DPT, B.SC.PT',
    position: 'Senior Physiotherapy Consultant',
    info: [
      'Tunde Okikiolu, DPT, is a dedicated Physical Therapist with a passion for helping individuals overcome physical disabilities and regain independence. With over 30 years of experience, Tunde has a unique combination of expertise as a Physical Therapist, Return-to-Work Coordinator, and Social Worker, bringing a holistic approach to rehabilitation. His global experience spans the United States, Canada, Ghana, India, and Nigeria, working across acute care, outpatient facilities, private practices, and workplace rehabilitation settings.',
      'Tunde specializes in treating orthopedic conditions such as osteoarthritis and post-surgical rehabilitation, including knee, hip, and shoulder replacements. His expertise also extends to neurological recovery (stroke, brain injuries), work-related injuries, musculoskeletal issues, post-fracture care, and injuries affecting the neck, back, and limbs. Using Movement Systems strategies, he analyzes movement patterns to identify alignment issues and muscle imbalances, complementing this with Exercise Therapy and Instrument-Assisted Soft Tissue Manipulation (IASTM), including cupping and Gua Sha.',
      'Tunde holds a Doctorate in Physical Therapy from a leading U.S. university and is committed to delivering evidence-based, patient-centered care. Outside of his professional work, he enjoys reading, writing, and spending quality time with his wife and three sons.',
    ].join('\n'),
  },
  {
    img: '/Harneet-Kaur.webp',
    name: 'Harneet Kaur MPT, B.SC.P.T',
    position: 'Massage Physiotherapist',
    info: [
      'Harneet is a dedicated physiotherapist who completed her Master’s in Physiotherapy in 2014 in Punjab, India. She brings extensive experience from both hospital and private practice settings, offering a well-rounded and evidence-based approach to patient care.',
      'She is passionate about delivering patient-centered treatment, creating individualized plans that focus on helping people recover from injuries, restore mobility, and improve overall function. Harneet is committed to helping her patients move better, heal faster, and live pain-free.',
      'Her areas of specialization include Dry Needling (Level-I) and Pelvic Floor Physiotherapy (Level II). She provides one-on-one care, taking the time to thoroughly assess each patient and identify the root cause of pain or dysfunction—rather than treating symptoms. Whether managing chronic pain, muscle tension, or post-injury or post-surgical recovery, Harneet tailors every treatment plan to align with each patient\’s goals and lifestyle.',
      'Known for her compassionate yet results-driven approach, Harneet empowers her patients through education, hands-on therapy, personalized exercise programs, and practical strategies to prevent future injuries. Her ultimate goal is to restore confidence in movement and support patients in returning to the activities they love and enjoy.',
      'Outside of work, Harneet enjoys spending quality time with her friends and family.',
    ].join('\n'),
  },
  // {
  //   img: '/mariam.webp',
  //   name: 'Mariam Mamo',
  //   position: 'Massage Therapist',
  //   info: 'Mariam Mamo is a registered message therapist. She graduated from MaKami College 3000 hours program in Calgary',
  // },
];

function StaffCard({ img, name, position, id }) {
  return (
    <div className={styles.staff__card}>
      <img src={img} alt="staff"></img>
      <div className={styles.staff__card_info}>
        <h3>{name}</h3>
        <p>{position}</p>
        <button command="show-modal" commandfor={id}>
          More
        </button>
      </div>
    </div>
  );
}

function Modal({ id, img, name, position, info }) {
  const dialogRef = useRef(null);
  const handleClose = () => {
    if (dialogRef.current) dialogRef.current.close();
  };
  return (
    <dialog ref={dialogRef} id={id} closedby="any">
      <div className={styles.intro}>
        <img src={img} alt="staff" />
        <h3>{name}</h3>
        <h4>{position}</h4>
      </div>
      <div>
        {info.split('\n').map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <button
        onClick={handleClose}
        popovertargetaction="hide"
        commandfor={id}
        command="close"
      >
        X
      </button>
    </dialog>
  );
}

function StaffSection() {
  return (
    <section className={styles.staff__section}>
      <h2>Our Staff</h2>
      <p>
        Our team of highly skilled and licensed physiotherapists, specializing
        in{' '}
        <Link to="/treatments" className={styles.link}>
          {'a broad range of treatments'}
        </Link>
        , brings a wealth of experience to ensure that you receive the highest
        quality of care. Whether you’re seeking professional physiotherapy
        services, physiotherapy closest to you, or advanced physical therapy
        services, we are here to guide you on the right path to optimal health.
      </p>
      <div className={styles.cards__container}>
        {data.map((staff, i) => {
          const id = `staff-modal-${i}`;
          return (
            <Fragment key={id}>
              <StaffCard
                img={staff.img}
                name={staff.name}
                position={staff.position}
                id={id}
              />
              <Modal
                img={staff.img}
                name={staff.name}
                position={staff.position}
                info={staff.info}
                id={id}
              />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default StaffSection;

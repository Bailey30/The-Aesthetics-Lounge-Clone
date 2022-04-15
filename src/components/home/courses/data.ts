import img from "../../../img";

type types = {
  id: number;
  img: string;
  tag: string;
  title: string;
  extra?: string;
  description: Array<string>;
};

const data: types[] = [
  {
    id: Math.random(),
    img: img.courses1,
    tag: "beginner-course",
    title: "Pathway to Aesthetics",
    description: [
      "We will require that every trainee and aspiring aesthetician enrol and complete our pathway course, designed to give you the basic qualifications and lay the foundations for your future in the industry.",
      "Upon completion, you will become skilled in anatomy and physiology, as well as trained in delivering select therapies.",
    ],
  },
  {
    id: Math.random(),
    img: img.courses2,
    tag: "introduction-to-dermal-fillers",
    title: "Introduction to Dermal Fillers",
    description: [
      "We all start somewhere, and we feel that our introductory course on dermal fillers is the perfect way to kickstart your future career.",
      "Here, you will learn how to properly prepare and administer dermal fillers, including the scientific, and health and safety details.",
    ],
  },
  {
    id: Math.random(),
    img: img.courses3,
    tag: "basic-botox",
    extra: "anti-wrinkle",
    title: "Anti-Wrinkle: An Introduction",
    description: [
      "This particular course covers the three primary areas comprising the anti-wrinkle treatments we offer at the Aesthetic Lounge.",
      "Master the fundamentals and become well-versed in the implementation, understanding the science behind the anti-wrinkle application, and the advantages and disadvantages of the practise.",
    ],
  },
  {
    id: Math.random(),
    img: img.courses4,
    tag: "the-full-works",
    title: "The Full Works",
    description: [
      "Our most complete and popular course to date, so we encourage you to sign up fast to avoid disappointment!",
      "The Full Works comprises both our ‘Introduction to Dermal Fillers’ and ‘Basic Anti-Wrinkle’ courses, delivered in a single combined course to give you the complete experience in learning and practising the fundamentals.",
    ],
  },
  {
    id: Math.random(),
    img: img.courses5,
    tag: "platinum-package",
    title: "Platinum Package",
    description: [
      "If you’re seeking a more hands-on, one-to-one learning experience, then the Aesthetic Lounge has the perfect package for you.",
      "Our platinum package combines all of our ‘Pathway’ and ‘Introduction’ courses into one, but delivered personally to you!",
    ],
  },
  {
    id: Math.random(),
    img: img.courses6,
    tag: "gold-package",
    title: "Gold Package",
    description: [
      "Similar to our Platinum Package, the Gold Package is beneficial for those looking to learn in smaller groups than what we usually cater to.",
      "Here, you will learn everything covered in our ‘Pathway’ and ‘Introduction’ courses, as our specialist educator teaches you in small classes of two or three individuals.",
    ],
  },
  {
    id: Math.random(),
    img: img.courses7,
    tag: "advanced-courses",
    title: "Advanced Courses",
    description: [
      "Led by the head practitioner at your chosen Aesthetic Lounge clinic, our advanced courses are tailored for those looking to truly master their skills as an aesthetician.",
      // "Our range of advanced courses include:",
      // "Facial Sculpting Masterclass with Cannula Masterclass",
      // "Non-Surgical Rhinoplasty Masterclass",
      // "Advanced Lip Techniques (inc. Russian) Masterclass",
      // "Tear Trough with Cannula Masterclass",
    ],
  },
  {
    id: Math.random(),
    img: img.courses8,
    tag: "health-courses",
    title: "Health Courses",
    description: [
      "Taught by our resident skin expert, these courses are more dedicated to refining your knowledge and expertise in boosting skin, implementing vitamins, and applying weight loss solutions.",
    ],
  },
  {
    id: Math.random(),
    img: img.courses9,
    tag: "refresher-courses",
    title: "Refresher Courses",
    description: [
      "Depending on your individual skill and desires, the Aesthetic Lounge offers a wide range of refresher courses covering the content mentioned in our accredited courses.",
      "Enquire today to discover how we can help hone your skills into becoming the perfect practitioner, and even supply you with the opportunity to join both our exclusive help forum and O.R.A (Organisation of Recognised Aestheticians.",
    ],
  },
];

export default data;

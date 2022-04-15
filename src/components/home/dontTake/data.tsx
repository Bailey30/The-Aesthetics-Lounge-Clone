import img from "../../../img";

type types = {
  id: number;
  img: string;
  link: string;
};

const data: types[] = [
  {
    id: Math.random(),
    img: img.donttake1,
    link: "https://www.instagram.com/",
  },
  {
    id: Math.random(),
    img: img.donttake2,
    link: "https://www.instagram.com/",
  },
  {
    id: Math.random(),
    img: img.donttake3,
    link: "https://www.instagram.com/",
  },
  {
    id: Math.random(),
    img: img.donttake4,
    link: "https://www.instagram.com/",
  },
];

export default data;

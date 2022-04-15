import img from "../../../img";

type types = {
    id: number;
    img: string
    heading: string
    comment: string
    name: string
}

const data: types[] = [
    {
        id: Math.random(),
        img: img.testimonialsAbby,
        heading: "“Your training academy is stunning!”",
        comment: "Just wanted to say a huge thanks to you girls for my training! I’ve never left a training course feeling SO confident! Bret and Carly’s knowledge and expertise is next level, your training academy is stunning, you have more models than I was even able to keep count of, and you make booking and organising everything so so easy! The girls are always on hand to help!",
        name: "Abby"
        
    },
    {
        id: Math.random(),
        img: img.testimonialsChloe,
        heading: "“My training course was amazing!”",
        comment: "Just wanted to say that my training course was amazing! I was nervous about implementing techniques on people but I overcame my fear without even realising due to being made to feel so comfortable! The support after it has been amazing, as you have kept in touch making sure I’m okay and if there is anything I need. 100% recommend to anyone!",
        name: "Chloe"
    },
    {
        id: Math.random(),
        img: img.testimonialsJayna,
        heading: "“I’ve had so much positive feedback already!”",
        comment: "The training was so good, I feel confident! I’m already fully booked Saturday it’s crazy! I’ve had so much positive feedback already! Everyone is so supportive, you really do want the best for all your students. You go above and beyond! The amount of models you get has allowed me to walk out knowing I’ve got this! I honestly did not want to leave I had so much fun, I can’t wait to come back and shadow!",
        name: "Jayna"
    },
    {
        id: Math.random(),
        img: img.testimonialsJaynEilidh,
        heading: "“Couldn’t have asked for a better experience!”",
        comment: "I just want to say a massive thank you got your amazing training! I honestly couldn’t have asked for a better experience. I honestly never expected my confidence to be at such a high level so early! Bret explained everything and put me right at ease in the training academy. I was fully confident to take over the needle after just two clients! Would recommend your courses to people at all levels.",
        name: "Eilidh"
    },
    {
        id: Math.random(),
        img: img.testimonialsMichelle,
        heading: "“You girls 100% made me feel super confident”",
        comment: "Thank you Ladies so much for the training! The refresher course was definitely needed after the God-awful training I had before. You girls 100% made me feel super confident! Any other training I wish to take, I will be calling on the Aesthetic Lounge!",
        name: "Michelle"
    },
    {
        id: Math.random(),
        img: img.testimonialsMaddison,
        heading: "“I’ve left with an amazing portfolio!”",
        comment: "I had an amazing time training: I left feeling so confident, and couldn’t wait to really get into my work. The 1:1 training and amount of models you have is amazing. I’ve left with an amazing portfolio: my page is full of before/afters and I love it! The girls were amazing as well, the energy from the minute you start your training, to the minute you leave, is just fab! I can’t wait to be back.",
        name: "Maddison"
    },
    {
        id: Math.random(),
        img: img.testimonialsDiane,
        heading: "“So excited to get started!”",
        comment: "Can I just say a huge thank you for having me last week and making me feel so at ease and comfortable. Was lovely meeting you girls, and I’m so so glad that I chose your academy, as I feel as though I will definitely have that ongoing support that no other academy provides. I will defniitely be recommending you to anyone thar would like to get into the industry.",
        name: "Diane"
    },
    {
        id: Math.random(),
        img: img.testimonialsKatie,
        heading: "“I will 100% be back!”",
        comment: "I’ve never known of a training academy to offer so many models to practice on. It’s unheard of! The day was intense training with clients back to back, but was so well organised. I have come back to London with so much more confidence! I will 100% be back for more training in the future and will recommend you highly!",
        name: "Katie"
    }
]

export default data;
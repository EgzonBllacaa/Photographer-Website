import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const sections = [
  {
    // imgSrc: "/agnesa_2.webp",
    content:
      "Riard, qaty n’dit te dasmes kom pas stres e rremuje, po kur i pash fotot qe na i ke bo, m’u ndal zemra veq pak prej emocioneve. Cdo moment e ki kap qaty ku duhet, e sidomos fotot e mia si nuse – jon krejt ma t’mira se qysh i kom imagjinu. Ngjyrat, drita, qet iluzioni qe e merr fotoja, qajo e ban krejt diferencen. Krejt familja u habit qysh jon dal aq natyrale. S’kom qare pa t’falenderu prej zemres, seriozisht e ke bo diten tone me u duk si film. Respect i madh ✨👰",
    content2: "",
    content3: "",
    // names: "Amanda + Ryan",
  },
  {
    imgSrc: "/IMG_4.webp",
    content:
      "Kur i pash fotot e dasmes, u bona me lot. Jo veq pse eshte dasem, po pse qysh e ke kap cdo detaj, qysh na ke bo me u ndi rahat edhe kur krejt po na shihshin. Fotot e mia si nuse jon krejt vibe i veqant, sikur jon nxjerr prej ndonje editoriali. T’gjitha shoqet tu m’pyet kush m’i ka bo, se krejt po doken perfekt – pa siklet, pa pozim t’shtirun. Sinqerisht, je prej atyne fotografave qe nuk lodhen me bo punen, po e duan. Shume faleminderit qe na e ke bo kujtim kaq t’fort diten tone 🤍✨",
  },
  {
    imgSrc: "/IMG_7.webp",
    content:
      "Riard, t’kom thon edhe n’diten e dasmes qe jom super e knaqt, po kur i pash fotot m’u desht me t’shkruni prap. Krejt natyrale, krejt elegante, edhe si nuse qysh e kom pas friken me dale, ti m’ke bo me ndi vetbesim edhe ajo shihet n’foto. Fotot me familje, me dhendrin, me shoqet – krejt perfekt. Ama perfekt. As s’kom prit ashtu. Krejt t’kan lavdu edhe po t’lavdojn hala. Faleminderit qe ma ke bo diten ma t’rendesishme me u duk qysh duhet. Urime per punen qe po e bon, se s’osht e zakonshme 🙏👰✨",
  },
  //   {
  //     imgSrc: "/Hero_img_1.webp",
  //     content: `Jordan Voth, where do I start...As a fellow photographer I have drawn so much creative drive and inspiration from your work. Carlos and I were so grateful for your friendly, passionate approach, and your willingness to make the journey all the way to little Whangarei, New Zealand. After countless emails, and many hours of flights and car rides, you were here. We couldn't have wished for a more wonderful, talented, enthusiastic photographer, which we are so lucky to now call a friend. Jordan you simply are the best. The tears streamed down my face as Carlos and I opened each photo together, you have captured the true essence of our day, and moments, and memories that mean the world to us, and our family and friends. We will cherish them for many life times. It was our pleasure to have you join us here in New Zealand, and we will always continue to support you in all your future ventures. We can't thank you enough for the gift you've given us. Lots of love Monique and Carlos.`,
  //     names: "Kristine + Josh",
  //   },
  //   {
  //     imgSrc: "/IMG_5.webp",
  //     content: `There really aren’t any words to describe just how thankful I am to have had Jordan there to capture some of the most important moments in my life. I followed and admired his work for years before ever getting the opportunity to shoot with him. My husband first hired him for a proposal shoot because he knew how much I loved his work, and there has been no looking back ever since.`,
  //     content2: `Once it came time to start planning the wedding, there was one thing that I knew for certain - that when it was all said and done, I wanted to be left with photos that would tell a story. I wanted photos that would capture emotions. I wanted photos that would allow us to relive our perfect day over and over again. And there is nobody I would have trusted that with more than Jordan.`,
  //     content3: `To this day, I am still blown away by Jordan’s work and the experiences we shared with him. I am not only grateful for his talent, but also for his friendship. He is extremely personable, easy to work with, and truly goes above and beyond. From choosing the best locations and lighting, to making us feel comfortable in front of the camera - Jordan proved his worth time and time again.

  // My husband and I both thank you, Jordan. We will treasure these photos for the rest of our lives.`,
  //     names: "Emily + Tate",
  //   },
];

const ClientWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };
  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sections.length) % sections.length
    );
  };
  const section = sections[currentIndex];
  return (
    <div>
      <h2 className="uppercase text-3xl text-zinc-600 mb-5 text-center">
        Client Words
      </h2>

      <section
        className={`w-full flex flex-col xl:flex-row items-center gap-10 my-20 xl:max-w-7xl  mx-auto `}
      >
        {/* <img
          src={section.imgSrc}
          loading="lazy"
          sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
          className="xl:w-1/2  sm:max-w-4xl w-full"
          alt=""
        /> */}
        <div className="flex gap-3 justify-center items-center w-full">
          <button
            onClick={handlePrevious}
            className="bg-amber-800/65 text-white rounded-3xl p-3 cursor-pointer hover:bg-amber-800/80"
          >
            <BsArrowLeft />
          </button>
          <div className="flex flex-col sm:max-w-4xl w-full gap-4 md:mx-10  text-zinc-500">
            <p className="leading-loose">{section.content}</p>
            {section.content2 && (
              <p className="leading-loose ">{section.content2}</p>
            )}
            {section.content3 && (
              <p className="leading-loose ">{section.content3}</p>
            )}
            {/* <p className="capitalize">{section.names}</p> */}
          </div>
          <button
            onClick={handleNext}
            className="bg-amber-800/65 hover:bg-amber-800/80 text-white rounded-3xl p-3 cursor-pointer"
          >
            <BsArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ClientWords;

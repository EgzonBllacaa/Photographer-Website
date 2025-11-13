import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const sections = [
  {
    imgSrc: "/IMG_3.jpg",
    content:
      "Working with Jordan was an absolute pleasure. I had found him on instagram and knew from that moment this is who I wanted to photograph our wedding. To my surprise, he was so cool with flying anywhere in the world and even when we had to cancel our wedding in Italy due to Covid, he still flew across the country to a small town in New Jersey to shoot our big day. He is extremely professional, timely, organized, and a true master at his craft. When we got our wedding photos back, my husband and I could not BELIEVE how insanely beautiful they came out. Not only did his work make us look like we stepped out of a magazine, but he captured moments throughout our day in such a unique and stunning way; natural and effortless.",
    content2:
      "We first met Jordan in a moment of pure serendipity. We had hired him for our wedding and just a few months before, my husband and I were vacationing in Santorini, Greece when we happened to see Jordan was in the same place shooting a wedding. He made the time and effort to come to meet up with us and not only did we feel like we made a friend, but we got some EPIC Santorini sunset photos.",
    content3:
      "These photos we have from him are so special to us. We will be forever grateful for him, his hard work, and friendship.",
    names: "Amanda + Ryan",
  },
  {
    imgSrc: "/IMG_4.jpg",
    content:
      "From the moment we met him, Jordan exceeded our expectations. While his incredible talent and photos speak for themselves, he’s also an all-round awesome person to be around. We knew we wanted engagement and wedding photos, but we aren’t a couple who loves to be in front of a camera. When we told our wedding planner this, she told us she knew Jordan would be the perfect for us. She was 100% right. He came all the way out to Colorado for our engagement shoot and spent a lot of time picking a place that was perfect for us. He immediately made us feel comfortable and is the kindest human (and has the cutest dogs). Jordan made the process so easy and we had a blast working with him. On the day of the wedding, he was just the same - kind, attentive, and captured us and our day perfectly. Our family loved him so much, that when my brother and sister-in-law got married the following year, they hired Jordan as their photographer as well. We’re so lucky to have so many of his beautiful photographs of our family’s favorite moments in our home. We really can’t recommend or thank Jordan enough. He’s just the best.",
    names: "-Madeline + Mikell",
  },
  {
    imgSrc: "/IMG_7.jpg",
    content: `Where do I even begin? Jordan exceeded our expectations from every angle. His talent speaks for itself. But what makes Jordan the best is that he's just an awesome person. He's one of those people that within 5 minutes of meeting him, you feel like you've known him your whole life. He has a way of making you feel super comfortable in front of the camera, and he comes up with awesome photo ideas, which end up being some of the best ones of the bunch. As you can see from his work, he's super adventurous. So when he says, "let's climb to the top of this boulder to get the shot," you do what he says. He's got an incredible eye for detail, and he doesn't miss a beat. He works very collaboratively and does everything he can to get you your dream photos. There's reason he's known among photographers all over the world. He really is one of the most talented photographers you could ever work with, but in my opinion, one of the coolest too. By the time our wedding came around, we had already built a relationship with him over the last several months, so it felt like a close friend was taking our photos. Which is exactly what you want on your special day. Working with Jordan was the best decision we ever made! Love ya J!`,
    names: "Michelle + Ricardo",
  },
  {
    imgSrc: "/Hero_img_1.jpg",
    content: `Jordan Voth, where do I start...As a fellow photographer I have drawn so much creative drive and inspiration from your work. Carlos and I were so grateful for your friendly, passionate approach, and your willingness to make the journey all the way to little Whangarei, New Zealand. After countless emails, and many hours of flights and car rides, you were here. We couldn't have wished for a more wonderful, talented, enthusiastic photographer, which we are so lucky to now call a friend. Jordan you simply are the best. The tears streamed down my face as Carlos and I opened each photo together, you have captured the true essence of our day, and moments, and memories that mean the world to us, and our family and friends. We will cherish them for many life times. It was our pleasure to have you join us here in New Zealand, and we will always continue to support you in all your future ventures. We can't thank you enough for the gift you've given us. Lots of love Monique and Carlos.`,
    names: "Kristine + Josh",
  },
  {
    imgSrc: "/IMG_5.jpg",
    content: `There really aren’t any words to describe just how thankful I am to have had Jordan there to capture some of the most important moments in my life. I followed and admired his work for years before ever getting the opportunity to shoot with him. My husband first hired him for a proposal shoot because he knew how much I loved his work, and there has been no looking back ever since.`,
    content2: `Once it came time to start planning the wedding, there was one thing that I knew for certain - that when it was all said and done, I wanted to be left with photos that would tell a story. I wanted photos that would capture emotions. I wanted photos that would allow us to relive our perfect day over and over again. And there is nobody I would have trusted that with more than Jordan.`,
    content3: `To this day, I am still blown away by Jordan’s work and the experiences we shared with him. I am not only grateful for his talent, but also for his friendship. He is extremely personable, easy to work with, and truly goes above and beyond. From choosing the best locations and lighting, to making us feel comfortable in front of the camera - Jordan proved his worth time and time again.

My husband and I both thank you, Jordan. We will treasure these photos for the rest of our lives.`,
    names: "Emily + Tate",
  },
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
        <img
          src={section.imgSrc}
          className="xl:w-1/2  sm:max-w-4xl w-full"
          alt=""
        />
        <div className="flex gap-3 items-center w-full">
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
            <p className="capitalize">{section.names}</p>
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

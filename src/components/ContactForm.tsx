import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    partnerFirstName: "",
    partnerLastName: "",
    email: "",
    phone: "",
    instagramHandle: "",
    interestedIn: "wedding",
    hearAboutMe: "clientReferral",
    eventDate: "",
    eventLocation: "",
    attractedToWork: "",
    weekendActivities: "",
    aboutYourselves: "",
  });

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const submissionData = { ...formData, time: new Date().toLocaleString() };
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        submissionData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            partnerFirstName: "",
            partnerLastName: "",
            email: "",
            phone: "",
            instagramHandle: "",
            interestedIn: "",
            hearAboutMe: "",
            eventDate: "",
            eventLocation: "",
            attractedToWork: "",
            weekendActivities: "",
            aboutYourselves: "",
          });
        },
        (error) => {
          console.error("Failed to send email.", error);
          alert("Failed to send message.");
        }
      );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl w-full flex flex-col gap-8 my-10"
    >
      <div className="flex flex-col sm:flex-row gap-5 w-full items-center">
        <div className="flex flex-col w-full">
          <label htmlFor="">First Name:*</label>
          <input
            className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="">Last Name:*</label>
          <input
            className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 w-full items-center">
        <div className="flex flex-col w-full">
          <label htmlFor="">Partner's First Name</label>
          <input
            className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
            type="text"
            name="partnerFirstName"
            value={formData.partnerFirstName}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="">Partner's Last Name</label>
          <input
            className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
            type="text"
            name="partnerLastName"
            value={formData.partnerLastName}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">Email:*</label>
        <input
          className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">Phone:*</label>
        <input
          className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">Please share your Instagram handle(s):</label>
        <input
          className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
          type="text"
          name="instagramHandle"
          value={formData.instagramHandle}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">We're interested in...</label>
        <select
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleOnChange}
          className="border-b outline-none py-3 px-1 hover:border-b-amber-800 focus:bg-amber-800/10"
        >
          <option value="wedding">Wedding</option>
          <option value="elopement">Elopement</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">How did you hear about me?*</label>
        <select
          name="hearAboutMe"
          value={formData.hearAboutMe}
          onChange={handleOnChange}
          className="border-b outline-none py-3 px-1 hover:border-b-amber-800 focus:bg-amber-800/10"
        >
          <option value="clientReferral">Client Referral</option>
          <option value="google">Google</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="pinterest">Pinterest</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">When is your ideal event date?*</label>
        <input
          className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
          type="text"
          placeholder="Select date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">Where will your event be located?</label>
        <input
          className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
          type="text"
          placeholder="City & State"
          name="eventLocation"
          value={formData.eventLocation}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">What attracted you to my work?*</label>
        <textarea
          rows={2}
          cols={10}
          name="attractedToWork"
          value={formData.attractedToWork}
          onChange={handleOnChange}
          className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">
          What are your favorite things to do on the weekends?
        </label>
        <textarea
          rows={2}
          cols={10}
          className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
          name="weekendActivities"
          value={formData.weekendActivities}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="">Tell me all about yourselves!*</label>
        <textarea
          rows={2}
          cols={10}
          className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
          name="aboutYourselves"
          value={formData.aboutYourselves}
          onChange={handleOnChange}
        />
      </div>
      <button
        type="submit"
        className="px-10 py-3 text-center mx-auto bg-amber-800 text-white w-fit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;

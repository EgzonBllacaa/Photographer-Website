import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import * as EmailValidator from "email-validator";
import FadeIn from "./FadeIn";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [error, setError] = useState<{ [key: string]: string }>({});

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (formData.firstName.trim() === "")
      newErrors.firstName = "First name is required";
    if (formData.email.trim() === "") newErrors.email = "Email is required";
    if (formData.lastName.trim() === "")
      newErrors.lastName = "Last name is required";
    if (!formData.phone && formData.phone.trim() === "") {
      newErrors.phone = "Phone number should be filled";
    } else if (formData.phone.length <= 8) {
      newErrors.phone = "Phone number is too short";
    }

    if (formData.eventLocation.trim() === "")
      newErrors.eventLocation = "Event location is required";
    if (!EmailValidator.validate(formData.email)) {
      newErrors.email = "Email provided is not a real one";
    }
    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
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
      <FadeIn>
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
            {error.firstName && (
              <span className="text-red-700">{error.firstName}</span>
            )}
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
            {error.lastName && (
              <span className="text-red-700">{error.lastName}</span>
            )}
          </div>
        </div>
      </FadeIn>
      <FadeIn>
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
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col w-full">
          <label htmlFor="">Email:*</label>
          <input
            className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
          />
          {error.email && <span className="text-red-700">{error.email}</span>}
        </div>
      </FadeIn>
      <FadeIn>
        {" "}
        <div className="flex flex-col w-full">
          <label htmlFor="">Phone:*</label>
          <input
            className="border-b outline-none py-3 px-1  hover:border-b-amber-800 focus:bg-amber-800/10"
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleOnChange}
          />
          {error.phone && <span className="text-red-700">{error.phone}</span>}
        </div>
      </FadeIn>
      <FadeIn>
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
      </FadeIn>
      <FadeIn>
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
      </FadeIn>
      <FadeIn>
        {" "}
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
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col  w-full">
          <label htmlFor="">When is your ideal event date?*</label>
          <DatePicker
            selected={formData.eventDate ? new Date(formData.eventDate) : null}
            onChange={(date: Date | null) => {
              if (date) {
                setFormData({
                  ...formData,
                  eventDate: date.toISOString().split("T")[0], // saves as yyyy-mm-dd
                });
              }
            }}
            placeholderText="Select date"
            dateFormat="dd/MM/yyyy"
            className="border-b outline-none py-3 px-1 hover:border-b-amber-800 focus:bg-amber-800/10 w-full"
            minDate={new Date()}
            showPopperArrow={false}
          />
        </div>
      </FadeIn>
      <FadeIn>
        {" "}
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
          {error.eventLocation && (
            <span className="text-red-700">{error.eventLocation}</span>
          )}
        </div>
      </FadeIn>
      <FadeIn>
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
      </FadeIn>
      <FadeIn>
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
      </FadeIn>
      <FadeIn>
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
      </FadeIn>

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

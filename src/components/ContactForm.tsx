import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import * as EmailValidator from "email-validator";
import FadeIn from "./FadeIn";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestedIn: "wedding",
    eventDate: "",
    eventLocation: "",
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
      newErrors.firstName = t("contactForm.errors.firstName");
    if (formData.lastName.trim() === "")
      newErrors.lastName = t("contactForm.errors.lastName");
    if (formData.email.trim() === "")
      newErrors.email = t("contactForm.errors.email");
    else if (!EmailValidator.validate(formData.email))
      newErrors.email = t("contactForm.errors.emailInvalid");

    if (!formData.phone || formData.phone.trim() === "")
      newErrors.phone = t("contactForm.errors.phoneRequired");
    else if (formData.phone.length <= 8)
      newErrors.phone = t("contactForm.errors.phoneShort");

    if (formData.eventLocation.trim() === "")
      newErrors.eventLocation = t("contactForm.errors.eventLocation");

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
        () => {
          alert(t("contactForm.submitSuccess") || "Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            interestedIn: "wedding",
            eventDate: "",
            eventLocation: "",
          });
        },
        () => {
          alert(t("contactForm.submitError") || "Failed to send message.");
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
            <label>{t("contactForm.firstName")}</label>
            <input
              className="border-b outline-none py-3 px-1 hover:border-b-amber-800 focus:bg-amber-800/10"
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
            <label>{t("contactForm.lastName")}</label>
            <input
              className="border-b outline-none py-3 px-1 hover:border-b-amber-800 focus:bg-amber-800/10"
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
        <div className="flex flex-col w-full">
          <label>{t("contactForm.email")}</label>
          <input
            className="border-b outline-none py-3 px-1 hover:border-b-amber-800 focus:bg-amber-800/10"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
          />
          {error.email && <span className="text-red-700">{error.email}</span>}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="flex flex-col w-full">
          <label>{t("contactForm.phone")}</label>
          <input
            className="border-b outline-none py-3 px-1 hover:border-b-amber-800 focus:bg-amber-800/10"
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
          <label>{t("contactForm.interestedIn")}</label>
          <select
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleOnChange}
            className="border-b outline-none py-3 px-1 hover:border-b-amber-800 focus:bg-amber-800/10"
          >
            <option value="wedding">
              {t("contactForm.interestedOptions.wedding")}
            </option>
            <option value="engagement">
              {t("contactForm.interestedOptions.engagement")}
            </option>
            <option value="anniversary">
              {t("contactForm.interestedOptions.anniversary")}
            </option>
            <option value="commercial">
              {t("contactForm.interestedOptions.commercial")}
            </option>
          </select>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="flex flex-col w-full">
          <label>{t("contactForm.eventDate")}</label>
          <DatePicker
            selected={formData.eventDate ? new Date(formData.eventDate) : null}
            onChange={(date: Date | null) => {
              if (date)
                setFormData({
                  ...formData,
                  eventDate: date.toISOString().split("T")[0],
                });
            }}
            placeholderText={
              t("contactForm.eventDatePlaceholder") || "Select date"
            }
            dateFormat="dd/MM/yyyy"
            className="border-b outline-none py-3 px-1 hover:border-b-amber-800 focus:bg-amber-800/10 w-full"
            minDate={new Date()}
            showPopperArrow={false}
          />
        </div>
      </FadeIn>

      <FadeIn>
        <div className="flex flex-col w-full">
          <label>{t("contactForm.eventLocation")}</label>
          <input
            className="border-b outline-none py-3 px-1 hover:border-b-amber-800 focus:bg-amber-800/10"
            type="text"
            placeholder={t("contactForm.eventLocationPlaceholder")}
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleOnChange}
          />
          {error.eventLocation && (
            <span className="text-red-700">{error.eventLocation}</span>
          )}
        </div>
      </FadeIn>

      <button
        type="submit"
        className="px-10 py-3 text-center mx-auto bg-amber-800 text-white w-fit"
      >
        {t("contactForm.submitButton")}
      </button>
    </form>
  );
};

export default ContactForm;

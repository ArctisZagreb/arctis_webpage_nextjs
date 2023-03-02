import { Button } from "@/components/UI/Button";
import { StatusAlertModal } from "@/components/UI/StatusAlertModal";
import { ValidateEmail } from "@/lib/helper-functions";
import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.scss";
import { FormStatus } from "./FormStatus";
export const ContactForm = () => {
  const [formStep, setFormStep] = useState(0);
  const [contactEmail, setContactEmail] = useState(true);
  const [showStatusMessage, setShowStatusMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const respondRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "emailAddress") {
      setContactEmail(true);
    }
    if (e.target.value !== "emailAddress") {
      setContactEmail(false);
    }
  };
  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    let errorMsg = "";
    if (nameRef.current?.value === "") {
      errorMsg += "Name field is empty. ";
    }

    if (contactEmail || (!contactEmail && phoneRef.current?.value === "")) {
      if (contactEmail) {
        if (!emailRef.current) {
          errorMsg += "Enter valid email address.";
          return;
        }
        if (!ValidateEmail(emailRef.current.value)) {
          errorMsg += "Enter valid email address.";
        }
      } else {
        errorMsg += "Enter your phone number.";
      }
    }
    if (messageRef.current?.value === "") {
      errorMsg += "Message field is empty.";
    }
    if (errorMsg !== "") {
      setStatusMessage(errorMsg);
      setShowStatusMessage(true);
      setTimeout(() => {
        setStatusMessage("");
        setShowStatusMessage(false);
      }, 8000);
      return;
    }
    const contactSignup = {
      name: nameRef.current?.value,
      email:
        emailRef.current?.value === undefined ? "" : emailRef.current?.value,
      phoneNumber:
        phoneRef.current?.value === undefined ? "" : phoneRef.current?.value,
      wantedResponse: respondRef.current?.value,
      message: messageRef.current?.value,
    };
    setContactEmail(true);
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactSignup),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFormStep(1);
          setContactEmail(true);
        } else {
          setFormStep(2);
          setContactEmail(true);
        }
      });
  };

  return (
    <div className={styles["contact-form"]}>
      {formStep === 0 && (
        <form className={styles["form"]} onSubmit={formSubmitHandler}>
          <input ref={nameRef} type="text" name="name" placeholder="Name" />
          <label htmlFor="respondType">
            <p>I want to be answerd by</p>
            <select ref={respondRef} onChange={selectHandler}>
              <option value="email">Email</option>
              <option value="phoneCall">PhoneCall</option>
              <option value="whatsupMessage">Whatsup Message</option>
            </select>
          </label>
          {contactEmail ? (
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
          ) : (
            <input
              type="number"
              name="phone"
              placeholder="phone number"
              ref={phoneRef}
            />
          )}
          <textarea ref={messageRef} placeholder="Your message"></textarea>
          <div className={styles["button-container"]}>
            <Button text="submit" />
          </div>
        </form>
      )}
      {formStep === 1 && (
        <FormStatus
          onClickF={() => {
            setFormStep(0);
          }}
          status="Success!"
          message="Thank you for contacting us.We will respond as soon as possible."
          buttonText="Send new message"
          success={true}
        />
      )}
      {formStep === 2 && (
        <FormStatus
          onClickF={() => {
            setFormStep(0);
          }}
          status="Something went wrong."
          message="Try send new message or contact us directly via email or phone."
          buttonText="Send new message"
          success={false}
        />
      )}
      {showStatusMessage && (
        <StatusAlertModal message={statusMessage} status="error" />
      )}
    </div>
  );
};

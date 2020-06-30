import React, { useState } from "react"
import { useFormik } from "formik"
import ReCAPTCHA from "react-google-recaptcha"
import * as Yup from "yup"
import css from "@emotion/css"
import tw from "tailwind.macro"
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
export default function ContactForm() {
  const [success, setSuccess] = useState(null)
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    values,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      "g-recaptcha-response": "",
    },

    onSubmit: (values) => {
      fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      })
        .then(() =>
          setSuccess(
            "Thanks for contacting us, we will get back to you within 48 hours!"
          )
        )
        .catch((error) =>
          setSuccess(
            "Something went wrong. Please try sending the message again."
          )
        )
    },
    validationSchema: Yup.object({
      name: Yup.string().required("This field is required!"),
      email: Yup.string()
        .email("Real email must be used.")
        .required("This field is required!"),
      message: Yup.string().required("This field is required!"),
      "g-recaptcha-response": Yup.string().required("This field is required!"),
    }),
  })

  return (
    <div className="">
      <div
        className="container py-20"
        css={css`
          form {
            input,
            textarea {
              ${tw`bg-brand-gray-bg  p-4  md:mb-3  mb-4 lg:mb-0  rounded-lg w-full outline-none focus:border-brand-orange border`}
            }
            .col {
              ${tw`mb-4`}
            }
            .error {
              ${tw`text-sm text-red-500`}
            }
          }
        `}
      >
        <h1>Contact us</h1>
        {success ? (
          <div>
            <p>{success}</p>
          </div>
        ) : (
          <form
            name="contact"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="row lg:w-1/2">
              <div className="col w-full lg:w-1/2">
                <input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  type="text"
                  placeholder="Name"
                />
                {touched.name && errors.name && (
                  <span className="error">{errors.name}</span>
                )}
              </div>
              <div className="col w-full lg:w-1/2">
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="text"
                  placeholder="Email"
                />
                {touched.email && errors.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>
              <div className="col w-full">
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder="Your message"
                />
                {touched.message && errors.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>
              <div className="col w-full">
                <ReCAPTCHA
                  sitekey={process.env.GATSBY_SITE_KEY}
                  onChange={(e) => {
                    if (e) {
                      setFieldValue("g-recaptcha-response", e)
                    } else {
                      setFieldValue("g-recaptcha-response", "")
                    }
                  }}
                />
                {touched["g-recaptcha-response"] &&
                  errors["g-recaptcha-response"] && (
                    <span className="error">
                      {errors["g-recaptcha-response"]}
                    </span>
                  )}
              </div>

              <div className="col">
                <button
                  type="submit"
                  className="text-white focus:outline-none  items-center justify-center bg-brand-orange inline-block tracking-wide  py-4  rounded-lg  px-12 outline-none"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        )}{" "}
      </div>
    </div>
  )
}

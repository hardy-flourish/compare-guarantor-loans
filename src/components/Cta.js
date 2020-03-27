import React from "react"
import { Link } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
export default function Cta({ className, amount = 2000, term = 12 }) {
  return (
    <a
      href="/apply/"
      onClick={event => {
        event.preventDefault()
        trackCustomEvent({
          category: "Form",
          action: "Click to form",
          label: "Click to form",
        })
        window.open(event.target.href, "_self")
      }}
      state={{ amount, term }}
      className={
        "text-white inline-flex items-center justify-center bg-brand-orange inline-block tracking-wide  py-4 px-6 rounded-lg " +
        className
      }
    >
      {" "}
      Find My Loan
    </a>
  )
}

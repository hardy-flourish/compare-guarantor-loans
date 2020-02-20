import React from "react"
import { Link } from "gatsby"

export default function Cta({ className, amount = 2000, term = 12 }) {
  return (
    <a
      href="/apply/"
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

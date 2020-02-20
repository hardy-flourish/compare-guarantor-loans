import React from "react"

export default function CommonQuestions({ data }) {
  return (
    <div className="bg-brand-gray-bg flex-grow">
      {" "}
      <div
        className="container content py-24"
        dangerouslySetInnerHTML={{ __html: data.main.md.html }}
      ></div>
    </div>
  )
}

import React, { useState } from "react"
import { Collapse } from "react-collapse"
import css from "@emotion/css"
import tw from "tailwind.macro"
import { GoPlus, GoDash } from "react-icons/go"

export default function CommonQuestions({ data }) {
  return (
    <div className="bg-brand-gray-bg ">
      {" "}
      <div
        className="container py-24"
        css={css`
          .ReactCollapse--collapse {
            transition: height 300ms;
          }
        `}
      >
        <div className="text-brand-gray-light text-center mb-0   text-sm tracking-wide">
          HELP CENTRE
        </div>
        <h3 className="text-center font-bold mb-24 mt-0">Common Questions </h3>
        {data.map(qa => {
          return (
            <Question
              key={qa.question}
              question={qa.question}
              answer={qa.answer}
            ></Question>
          )
        })}
      </div>
    </div>
  )
}

function Question({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-t last:border-b py-6"
      css={css`
        border-color: #d7d7d7;
      `}
    >
      <h5
        className="font-bold flex items-center cursor-pointer mt-2 mb-1 leading-snug"
        onClick={e => {
          setOpen(o => !o)
        }}
      >
        {!open && <GoPlus className="text-brand-orange mr-3" />}
        {open && <GoDash className="text-brand-orange mr-3" />}
        {question}
      </h5>
      <div className="lg:pl-20 pt-2">
        <Collapse isOpened={open}>
          <div
            css={css`
              ${tw`border-l-4 pl-6 border-brand-orange  `}
              p {
                margin-bottom: 0;
                padding-bottom: 1.5rem;
                &:last-of-type {
                  padding-bottom: 0;
                }
              }
            `}
            dangerouslySetInnerHTML={{ __html: answer.md.html }}
          ></div>
        </Collapse>
      </div>
    </div>
  )
}

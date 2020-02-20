import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import Cta from "./Cta"
import css from "@emotion/css"
import { MdClose } from "react-icons/md"
export default function SideMenu({ menuIsOpen, setMenuIsOpen }) {
  const { menu } = useStaticQuery(graphql`
    {
      menu: allContentfulPage(
        filter: {
          node_locale: { eq: "en-US" }
          website: { in: ["Compare Guarantor Loans"] }
          addToMainNavigation: { eq: true }
        }
      ) {
        nodes {
          slug
          navigationTitle
        }
      }
    }
  `)
  return (
    <div
      className="fixed shadow z-50 top-0 right-0 h-screen w-screen bg-gray-900 flex items-center justify-center flex-col"
      css={css`
        transform: ${menuIsOpen ? "translateX(0)" : "translateX( 100%)"};
        transition: transform 300ms ease-in-out;
      `}
    >
      <MdClose
        css={css`
          opacity: ${menuIsOpen ? 1 : 0};
          transition: opacity 300ms ease-in-out;
        `}
        onClick={() => {
          setMenuIsOpen(false)
        }}
        className="absolute top-0 right-0 w-20 h-20 p-6 text-brand-orange"
      />
      {menu &&
        menu.nodes.map(item => {
          return (
            <Link
              className="uppercase mb-6 tracking-wide text-white "
              key={item.slug}
              to={item.slug == "/" ? "/" : `/${item.slug}/`.replace("//", "/")}
            >
              {item.navigationTitle}
            </Link>
          )
        })}
      <Cta></Cta>
    </div>
  )
}

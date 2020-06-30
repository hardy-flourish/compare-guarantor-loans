import React from "react"

import { graphql } from "gatsby"
import Layout from "@components/Layout"
import Hero from "@components/Hero"
import ValueExplainer from "@components/ValueExplainer"
import CommonQuestions from "@components/CommonQuestions"
import ContentComponent from "@components/Content"
import ContactForm from "../components/ContactForm"

export default function Page({
  pageContext,
  data: { heroData, VE, QA, Content },
}) {
  return (
    <Layout>
      {heroData.hasAHeroBanner && <Hero data={heroData}></Hero>}
      {VE.hasAValueExplainer && <ValueExplainer></ValueExplainer>}
      {QA.commonQuestions && (
        <CommonQuestions data={QA.commonQuestions}></CommonQuestions>
      )}
      {Content.main.md.html.length > 0 && (
        <ContentComponent data={Content}></ContentComponent>
      )}
      {Content.slug && Content.slug == "contact" && <ContactForm />}
    </Layout>
  )
}
export const query = graphql`
  query($contentful_id: String) {
    heroData: contentfulPage(
      node_locale: { eq: "en-US" }
      contentful_id: { eq: $contentful_id }
    ) {
      hasAHeroBanner
      heroBannerImage {
        fluid(quality: 100, maxWidth: 2200) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      mainHeadline
      subHeadline
      defaultLoanAmount
      maxLoanAmount
      minLoanAmount
    }
    VE: contentfulPage(
      node_locale: { eq: "en-US" }
      contentful_id: { eq: $contentful_id }
    ) {
      hasAValueExplainer
    }
    QA: contentfulPage(
      node_locale: { eq: "en-US" }
      contentful_id: { eq: $contentful_id }
    ) {
      commonQuestions {
        question
        answer {
          md: childMarkdownRemark {
            html
          }
        }
      }
    }
    Content: contentfulPage(
      node_locale: { eq: "en-US" }
      contentful_id: { eq: $contentful_id }
    ) {
      slug
      main: mainContentSection {
        md: childMarkdownRemark {
          html
        }
      }
    }
  }
`

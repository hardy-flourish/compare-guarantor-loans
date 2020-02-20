import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import css from "@emotion/css"
import tw from "tailwind.macro"
import Image from "gatsby-image"
import Cta from "@components/Cta"
import { useStaticQuery, graphql } from "gatsby"
export default function ValueExplainer() {
  const { ValueExplainer } = useStaticQuery(graphql`
    {
      ValueExplainer: contentfulValueExplainer {
        headline
        firstSectionTitle
        firstSectionContent
        firstSectionImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        secondSectionTitle
        secondSectionContent
        secondSectionImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        thirdSectionTitle
        thirdSectionContent
        thirdSectionImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { dots: true, slidesToShow: 1.1 },
      },
    ],
  }
  return (
    <div>
      <div className="container  py-16 lg:py-20">
        <h3 className="text-center font-bold mt-0 mb-16 lg:mb-20">
          {ValueExplainer.headline}
        </h3>
        <div
          css={css`
            ${tw`pl-4 lg:pl-0 -mx-6 lg:mx-0 `}
            .badge {
              ${tw`absolute bg-brand-orange z-10 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold   leading-none`}
              right: 1.75rem;
              top: 1rem;
            }

            .title {
              ${tw`font-bold text-lg mb-1 mt-6 font-bold text-lg mb-1 font-bold text-lg mb-1`}
            }
            .content {
              ${tw`text-base `}
            }
            .slide {
              ${tw`px-3`}
            }

            .slick-dots {
              text-align: left;
              li {
                margin: 0 0.75rem;
                button:before {
                  ${tw`bg-brand-gray-light rounded-full text-transparent`}
                }
                &.slick-active button:before {
                  ${tw`bg-brand-orange rounded-full text-transparent`}
                }
              }
            }
          `}
        >
          <Slider {...settings}>
            <div className="relative slide">
              <span className="badge">1</span>
              <div className="rounded-lg  overflow-auto">
                <Image fluid={ValueExplainer.firstSectionImage.fluid}></Image>
              </div>
              <h3 className="title">{ValueExplainer.firstSectionTitle}</h3>
              <p className="content">{ValueExplainer.firstSectionContent}</p>
            </div>
            <div className="relative slide">
              <span className="badge">2</span>
              <div className="rounded-lg  overflow-auto">
                <Image fluid={ValueExplainer.secondSectionImage.fluid}></Image>
              </div>
              <h3 className="title">{ValueExplainer.secondSectionTitle}</h3>
              <p className="content">{ValueExplainer.secondSectionContent}</p>
            </div>
            <div className="relative slide">
              <span className="badge">3</span>
              <div className="rounded-lg  overflow-auto">
                <Image fluid={ValueExplainer.thirdSectionImage.fluid}></Image>
              </div>
              <h3 className="title">{ValueExplainer.thirdSectionTitle}</h3>
              <p className="content">{ValueExplainer.thirdSectionContent}</p>
            </div>
          </Slider>
        </div>
        <div className="text-center mt-20 lg:mt-16">
          <Cta className="h-20 px-12" />
        </div>
      </div>
    </div>
  )
}

import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import css from "@emotion/css"
import tw from "tailwind.macro"
export default function Apply() {
  return (
    <Layout formPage>
      <div className="container   flex-grow flex items-center">
        <div
          className="w-full mb-20"
          css={css`
            .ccAppForm .ccAppForm--progress {
              background-color: #f6f6f6;
              height: 1rem;
              display: flex;
              overflow: hidden;
              margin: -0.5rem -0.5rem 0.5rem;
            }

            .ccAppForm .ccAppForm--progress-bar {
              display: flex;
              flex-direction: column;
              justify-content: center;
              color: #fff;
              text-align: center;
              white-space: nowrap;
              background-color: #148eff;
              transition: width 0.6s ease;
            }

            .ccAppForm
              .ccAppForm--checkbox-input:checked
              ~ .ccAppForm--checkbox-label:before {
              color: #fff;
              border-color: #148eff;
              background-color: #148eff;
            }

            .ccAppForm .ccAppForm--checkbox-label:before {
              position: absolute;
              left: 0;
              display: block;
              width: 1rem;
              height: 1rem;
              pointer-events: none;
              content: "";
              background-color: #fff;
              border: 1px solid #e9e9e9;
            }

            .ccAppForm .ccAppForm--checkbox-tooltip-target-i {
              width: 14px;
              height: 14px;
              border-radius: 50%;
              border: 1px solid #333;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              user-select: none;
              font-size: 11px;
              font-weight: 700;
            }

            .ccAppForm.ccAppForm--checkbox-tooltip .react-tooltip-lite {
              border: 1px solid #333;
              background: #fff;
              color: #333;
              font-size: 81.25%;
            }

            .ccAppForm.ccAppForm--checkbox-tooltip .react-tooltip-lite-arrow {
              border-color: #333;
              position: relative;
            }

            .ccAppForm.ccAppForm--checkbox-tooltip
              .react-tooltip-lite-down-arrow:before {
              border-bottom: 10px solid #fff;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              left: -10px;
              bottom: -11px;
            }

            .ccAppForm .ccAppForm--error.ccAppForm--alert {
              background-color: #ffdbdb;
              border-color: #f99;
            }

            .ccAppForm .ccAppForm--warning.ccAppForm--alert {
              background-color: #fff2db;
              border-color: #ffdb99;
            }

            .ccAppForm .ccAppForm--info {
              color: #148eff;
              border-color: #148eff;
            }

            .ccAppForm .ccAppForm--info.ccAppForm--alert {
              background-color: #dbedff;
              border-color: #99caff;
            }

            .ccAppForm .ccAppForm--success {
              color: #148eff;
              border-color: #148eff;
            }

            .ccAppForm .ccAppForm--success.ccAppForm--alert {
              background-color: #148eff;
              border-color: #148eff;
            }

            .ccAppForm .ccAppForm--button--primary {
              background-color: #148eff;
              border-color: #148eff;
              color: #fff;
            }

            .ccAppForm .ccAppForm--button--secondary {
              background-color: #7d7d7d;
              border-color: #252525;
              color: #fff;
            }

            .ccAppForm .ccAppForm--button--success {
              background-color: #148eff;
              border-color: #148eff;
              color: #fff;
            }

            .ccAppForm .ccAppForm--button--dark {
              background-color: #222;
              border-color: #222;
              color: #fff;
            }

            .ccAppForm.ccAppForm--button--info {
              background-color: #148eff;
              border-color: #148eff;
              color: #fff;
            }

            .ccAppForm.ccAppForm--error {
              background-color: red;
              border-color: red;
              color: #fff;
            }

            .ccAppForm .ccAppForm--controls {
              padding: 0.5rem;
              background-color: #e9e9e9;
              text-align: right;
            }

            .ccAppForm .ccAppForm--square-select--checked {
              background-color: #148eff;
              border-color: #148eff;
              color: #fff;
            }
            .ccAppForm .DayPicker-NavButton {
              position: absolute;
              top: 1em;
              right: 1.5em;
              left: auto;
              display: inline-block;
              margin-top: 2px;
              width: 1.25em;
              height: 1.25em;
              background-position: 50%;
              background-size: 50%;
              background-repeat: no-repeat;
              color: #7d7d7d;
              cursor: pointer;
            }

            .ccAppForm .DayPicker-Weekday {
              display: table-cell;
              padding: 0.5em;
              color: #7d7d7d;
              text-align: center;
              font-size: 0.875em;
            }

            .ccAppForm .DayPicker-WeekNumber {
              min-width: 1em;
              border-right: 1px solid #eaecec;
              color: #7d7d7d;
              text-align: right;
              font-size: 0.75em;
            }

            .ccAppForm .DayPicker-TodayButton {
              border: none;
              background-color: transparent;
              background-image: none;
              box-shadow: none;
              color: #4a90e2;
              font-size: 0.875em;
              cursor: pointer;
            }

            .ccAppForm .DayPicker-Day--today {
              color: #d0021b;
              font-weight: 700;
            }

            .ccAppForm .DayPicker-Day--outside {
              color: #7d7d7d;
              cursor: default;
            }

            .ccAppForm .DayPicker-Day--disabled {
              color: #dce0e0;
              cursor: default;
            }

            .ccAppForm .DayPicker-Day--sunday {
              background-color: #f7f8f8;
            }

            .ccAppForm .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
              color: #dce0e0;
            }

            .ccAppForm
              .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
              position: relative;
              background-color: #4a90e2;
              color: #f0f8ff;
            }

            .ccAppForm
              .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
              background-color: #51a0fa;
            }

            .ccAppForm
              .DayPicker:not(.DayPicker--interactionDisabled)
              .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
              background-color: #f0f8ff;
            }

            .ccAppForm .DayPickerInput-Overlay {
              position: absolute;
              left: 0;
              z-index: 1;
              background: #fff;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
            }

            .ccAppForm .rc-slider-rail {
              position: absolute;
              width: 100%;
              background-color: #e9e9e9;
              height: 0.75rem;
              border-radius: 6px;
            }

            .ccAppForm .rc-slider-track {
              position: absolute;
              left: 0;
              height: 0.75rem;
              border-radius: 6px;
              background-color: #148eff;
            }

            .ccAppForm .rc-slider-handle {
              position: absolute;
              margin-left: -0.9rem;
              margin-top: -0.525rem;
              width: 1.8rem;
              height: 1.8rem;
              cursor: pointer;
              cursor: grab;
              border-radius: 50%;
              border: 2px solid #148eff;
              background-color: #fff;
              -ms-touch-action: pan-x;
              touch-action: pan-x;
            }

            .ccAppForm .rc-slider-mark-text {
              position: absolute;
              display: inline-block;
              vertical-align: middle;
              text-align: center;
              cursor: pointer;
              color: #e9e9e9;
            }

            .ccAppForm .rc-slider-mark-text-active {
              color: #999;
            }

            .ccAppForm .rc-slider-dot {
              position: absolute;
              bottom: -2px;
              margin-left: -6px;
              width: calc(4px + 0.75rem);
              height: calc(4px + 0.75rem);
              border: 2px solid #e9e9e9;
              background-color: #fff;
              cursor: pointer;
              border-radius: 50%;
              vertical-align: middle;
            }

            .ccAppForm .rc-slider-dot-active {
              border-color: #148eff;
            }

            .ccAppForm .rc-slider-tooltip-inner {
              padding: 6px 2px;
              min-width: 24px;
              height: 24px;
              font-size: 12px;
              line-height: 1;
              color: #fff;
              text-align: center;
              text-decoration: none;
              background-color: #6c6c6c;
              border-radius: 6px;
              box-shadow: 0 0 4px #d9d9d9;
            }

            .ccAppForm .rc-slider-tooltip-arrow {
              position: absolute;
              width: 0;
              height: 0;
              border-color: transparent;
              border-style: solid;
            }

            .ccAppForm
              .rc-slider-tooltip-placement-top
              .rc-slider-tooltip-arrow {
              bottom: 4px;
              left: 50%;
              margin-left: -4px;
              border-width: 4px 4px 0;
              border-top-color: #6c6c6c;
            }

            .ccAppForm .ccAppForm--loading {
              background-color: #f6f6f6;
              height: 1rem;
              display: flex;
              overflow: hidden;
            }

            .ccAppForm .ccAppForm--loading-bar {
              display: flex;
              flex-direction: column;
              justify-content: center;
              color: #fff;
              text-align: center;
              white-space: nowrap;
              background-color: #148eff;
              transition: width 0.6s ease;
            }
          `}
        >
          <div id="ccApply"></div>
        </div>
      </div>
    </Layout>
  )
}

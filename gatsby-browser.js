import "./src/tailwind/global.css"

function addJS({ code, src, id }) {
  var s = document.createElement(`script`)

  s.type = `text/javascript`
  s.id = id
  if (code) {
    s.innerText = code
  } else if (src) {
    s.setAttribute("src", src)
  }

  document.getElementsByTagName(`body`)[0].appendChild(s)
}

export const onRouteUpdate = () => {
  const form = document.getElementById("ccApply")
  window.__loanAmount = window.localStorage.getItem("__loanAmount") || 2000
  window.__loanTerm = window.localStorage.getItem("__loanTerm") || 12
  if (form) {
    addJS({
      id: "CWConfig",
      code: `window.clearChoice_conf = window.clearChoice_conf || {};clearChoice_conf = {key: 'A551C33A-0F44-41FD-A115-BE6A410A779E',  elemId: 'ccApply', theme: 'ChooseWisely', loanAmount: window.__loanAmount,alwaysShowFirstStage:true, loanTerm: window.__loanTerm,  mode: "Results" }; `,
    })
    addJS({
      id: "CWScript",
      src: "https://3pi.choosewisely.co.uk/ccLoader.js",
    })
  } else {
    document
      .querySelectorAll('[src^="https://3pi.choosewisely.co.uk"]')
      .forEach(el => {
        el.remove()
      })
    document
      .querySelectorAll('[href^="https://3pi.choosewisely.co.uk"]')
      .forEach(el => {
        el.remove()
      })
  }
}

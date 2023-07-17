/* eslint-disable no-unused-vars */

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const BrowserCheck = () => {
  const userAg = navigator.userAgent
  console.log(navigator.userAgent)
  const safariId = /safari/i
  const fireFoxId = /firefox|fxios/i
  const chromeId = /chrome|chromium|crios/i
  const operaId = /opr\//i
  const edgeId = /edg/i

  const navigate = useNavigate()
  useEffect(() => {
    if (
      !window.navigator.userAgent.match(chromeId) &&
      !window.navigator.userAgent.match(fireFoxId)
    ) {
      navigate("/not-supported")
    }
  }, [])

  return null
}

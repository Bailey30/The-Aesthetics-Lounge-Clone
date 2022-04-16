import React, { useState } from 'react'
import Logo from "./logo"
import {
  OpeningBackground,

} from "./styles"

const Animation = () => {
  const [visible, setVisible] = useState<boolean>(true);

  setTimeout(() => {
    setVisible(false)
  }, 10000);

  setTimeout(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, 10);

  return (
    <>
      <Logo />
      {visible && <OpeningBackground></OpeningBackground>}
    </>
  )
}
export default Animation
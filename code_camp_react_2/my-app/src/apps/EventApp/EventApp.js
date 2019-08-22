import React from 'react'

export default function EventApp() {
  return (
    <>
      <img src="https://yt3.ggpht.com/a/AGF-l7_sGUrG_alh-mdTIDmdcaw1GanuPL2PxVajjQ=s48-c-k-c0xffffffff-no-rj-mo" alt="" onMouseOver={() => alert("mouseOver on img")} />
      <br />
      <br />
      <button onClick={() => alert("clicked button")}>Button</button>
    </>
  )
}
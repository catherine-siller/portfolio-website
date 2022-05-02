import React from "react"
import Image from "next/image"
import andrea from "../public/andrea.png"
import ccfacelab from "../public/ccfacelab.png"

const Portfolio = () => {
    return (
      <div className="max-w-4xl mx-auto mt-16 antialiased">
        <a target="_blank" href="https://www.andrealynnofficial.com/" rel="noopener noreferrer">
          <Image src={andrea} />
        </a>
        <a target="_blank" href="https://www.centralcoastfacelab.com/" rel="noopener noreferrer">
          <Image src={ccfacelab} />
        </a>
      </div>
    )
}

export default Portfolio;
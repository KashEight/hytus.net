import React from "react"
import profileImage from "../static/Hytus.png"
import "../assets/pages/top.sass"

const Top: React.FC<{}> = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto h-screen flex justify-center items-center text-center">
        <div className="w-2/3 mx-auto flex-col">
          <div className="flex justify-center items-center">
            <img src={ profileImage } className="profile-image" />
          </div>
          <div className="desc w-full my-6 space-y-1">
            <p className="text-lg">kash / Hytus - A Bad Nerd</p>
            <p>Maybe this site will be completed someday...</p>
            <p className="text-blue-300">
              <a href="https://github.com/KashEight/hytus.net">Source Code</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top

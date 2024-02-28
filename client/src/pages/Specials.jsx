import { useState, useEffect } from 'react'

// Stone of the month jewelery
import garnet from '../assets/jewelery/garnet.jpg'
import amethyst from '../assets/jewelery/amethyst.jpg'
import aquamarine from '../assets/jewelery/aquamarine_necklace.jpg'

// Specials jewelery
import heart_pink from '../assets/jewelery/heart_pink.jpg'
import heart_diamond from '../assets/jewelery/heart_diamond.jpg'

const specials = {
  january: {
    stone: "Garnet",
    image: garnet,
    color: "#800000" // Dark red
  },
  february: {
    stone: "Amethyst",
    image: amethyst,
    color: "#6A5ACD" // Slate blue
  },
  march: {
    stone: "Aquamarine",
    image: aquamarine,
    color: "#ADD8E6" // Light blue
  },
  april: {
    stone: "Diamond",
    image: "",
    color: "#F0EAE4" // Light gray
  },
  may: {
    stone: "Emerald",
    image: "",
    color: "#008000" // Dark green
  },
  june: {
    stone: "Alexandrite",
    image: "",
    color: "#90EE90" // Light green
  },
  july: {
    stone: "Ruby",
    image: "",
    color: "#FF6347" // Tomato
  },
  august: {
    stone: "Peridot",
    image: "",
    color: "#9ACD32" // Yellow green
  },
  september: {
    stone: "Sapphire",
    image: "",
    color: "#0000FF" // Blue
  },
  october: {
    stone: "Tourmaline",
    image: "",
    color: "#FF69B4" // Hot pink
  },
  november: {
    stone: "Topaz",
    image: "",
    color: "#FFA500" // Orange
  },
  december: {
    stone: "Blue Topaz",
    image: "",
    color: "#87CEEB" // Sky blue
  }
}

function Specials() {
  const [currentMonth, setCurrentMonth] = useState('')
  const [currentStone, setCurrentStone] = useState('')
  const [currentStoneImg, setCurrentStoneImg] = useState('')
  const [currentStoneColor, setCurrentStoneColor] = useState('')

  useEffect(() => {
    const today = new Date()
    const month = today.toLocaleDateString('en-US', { month: 'long' })
    const currentSpecial = specials[month.toLowerCase()]

    setCurrentMonth(month)
    setCurrentStone(currentSpecial.stone)
    setCurrentStoneImg(currentSpecial.image)
    setCurrentStoneColor(currentSpecial.color)
  }, [])

  return (
    <section className="specials mx-auto main-padding flex flex-col items-center gap-6 text-center mt-10 mb-3">
      <h1 className="text-2xl">Each month enjoy 20% off all jewelry with that month's birthstone</h1>

      <div className="deal">
        <h3 className="mb-3 text-2xl">Current Stone Of The Month:</h3>
        <p className="text-2xl">20% off <span style={{ color: currentStoneColor }} className="font-bold">{currentStone}</span> jewelry</p>
      </div>

      <div className="image mt-3">
        <img src={currentStoneImg} alt={currentStone} />
      </div>
    </section>
  )
}

export default Specials
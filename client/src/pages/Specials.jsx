import { useState, useEffect } from 'react'

const specials = {
    january: {
      stone: "Garnet",
      color: "#800000" // Dark red
    },
    february: {
      stone: "Amethyst",
      color: "#6A5ACD" // Slate blue
    },
    march: {
      stone: "Aquamarine",
      color: "#ADD8E6" // Light blue
    },
    april: {
      stone: "Diamond",
      color: "#F0EAE4" // Light gray
    },
    may: {
      stone: "Emerald",
      color: "#008000" // Dark green
    },
    june: {
      stone: "Alexandrite",
      color: "#90EE90" // Light green
    },
    july: {
      stone: "Ruby",
      color: "#FF6347" // Tomato
    },
    august: {
      stone: "Peridot",
      color: "#9ACD32" // Yellow green
    },
    september: {
      stone: "Sapphire",
      color: "#0000FF" // Blue
    },
    october: {
      stone: "Tourmaline",
      color: "#FF69B4" // Hot pink
    },
    november: {
      stone: "Topaz",
      color: "#FFA500" // Orange
    },
    december: {
      stone: "Blue Topaz",
      color: "#87CEEB" // Sky blue
    }
  }

function Specials() {
    const [currentMonth, setCurrentMonth] = useState('')
    const [currentStone, setCurrentStone] = useState('')
    const [currentStoneColor, setCurrentStoneColor] = useState('')

    useEffect(() => {
        const today = new Date()
        const month = today.toLocaleDateString('en-US', { month: 'long' })
        const currentSpecial = specials[month.toLowerCase()]

        setCurrentMonth(month)
        setCurrentStone(currentSpecial.stone)
        setCurrentStoneColor(currentSpecial.color)
    }, [])

    return (
        <section className="specials mx-auto main-padding flex flex-col items-center gap-6 text-center mt-10 mb-3">
            <h1 className="text-2xl">Each Month enjoy 20% off all jewelry with that month's birthstone</h1>
            <h2 className="text-2xl">Current Month: <span className="font-bold">{currentMonth}</span></h2>

            <div className="deal">
                <h3 className="mb-3 text-2xl">Current Special:</h3>
                <p className="text-2xl">20% off <span style={{ color: currentStoneColor }} className="font-bold">{currentStone}</span> jewelry</p>
            </div>
        </section>
    )
}

export default Specials
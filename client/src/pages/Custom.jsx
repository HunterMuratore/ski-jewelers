import heartNecklace from '../assets/jewelery/heart_necklace.jpg'

function Custom() {
    return (
        <section className="custom mx-auto main-padding flex flex-col items-center gap-6 text-center mt-10 mb-3">
            <h1 className="text-2xl">Transform cherished memories into timeless treasures with our custom jewelry service, where we skillfully repurpose your loved one's old pieces into stunning new creations tailored just for you.</h1>

            <div className="image mt-3">
                <img src={heartNecklace} alt="Heart Necklace" />
            </div>
        </section>
    )
}

export default Custom
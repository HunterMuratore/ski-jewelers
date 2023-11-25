const staff = [
    {
        name: 'Angela',
        img: '',
        description: 'Angela has been with us for 2 years. She greats everyone who walks in a with a big smile and loves helping customers find the perfect piece of jewelery.'
    },
    {
        name: 'Angela',
        img: '',
        description: 'Angela has been with us for 2 years. She greats everyone who walks in a with a big smile and loves helping customers find the perfect piece of jewelery.'
    },
    {
        name: 'Angela',
        img: '',
        description: 'Angela has been with us for 2 years. She greats everyone who walks in a with a big smile and loves helping customers find the perfect piece of jewelery.'
    },
    {
        name: 'Angela',
        img: '',
        description: 'Angela has been with us for 2 years. She greats everyone who walks in a with a big smile and loves helping customers find the perfect piece of jewelery.'
    },
    {
        name: 'Angela',
        img: '',
        description: 'Angela has been with us for 2 years. She greats everyone who walks in a with a big smile and loves helping customers find the perfect piece of jewelery.'
    },
]

function About() {
    return (
        <section className="about text-center main-padding">
            <article className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md mt-10">
                <h1 className="text-2xl font-bold mt-10 mb-5">About Us</h1>
                <p>Ski Jewelers was founded over 50 years ago. Our high standard of craftsmanship and integrity, has built a strong relationship with our customers. Our family owned business is built on trust and quality. Whether it is a small repair to a total redesign, Ski Jewelers completes the job right on our own premises. Our store offers one of the largest selections of fine jewelry in the area.</p>
            </article>

            <div>
                <h2 className="text-2xl font-bold mt-16 mb-5">Meet The Staff</h2>
                <div className="staff flex flex-wrap justify-around lg:px-24 mt-10 gap-6 mx-auto">
                    {staff.map((person, i) => (
                        <div key={i} className="person-card flex flex-col p-2 mx-auto">
                            <img src={person.image} alt={person.name} className='person-img'/>
                            <p className='mt-6 font-semibold text-lg'>{person.name}</p>
                            <p className='my-1 card-body'>{person.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
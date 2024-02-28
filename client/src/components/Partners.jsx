import Gabriel from '../assets/partners/gabriel_co_logo.png'
import Stuller from '../assets/partners/stuller_logo.jpg'
import Unique from '../assets/partners/unique_settings_of_new_york_logo.jpg'
import Classic from '../assets/partners/classic_of_ny_logo.png'

const partnerData = [
    { name: 'Gabriel & Co', logo: Gabriel },
    { name: 'Stuller', logo: Stuller },
    { name: 'Unique Settings of N.Y.', logo: Unique },
    { name: 'Classic of N.Y.', logo: Classic }
]

function Partners() {
    return (
        <div className="partners py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap gap-4 justify-center items-start">
                    {partnerData.map((partner, index) => (
                        <div key={index} className="flex flex-col items-center mx-2 my-2" style={{ flex: '1' }}>
                            <img src={partner.logo} alt={partner.name} className="h-12 mb-2" />
                            <span className='text-center'>{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners
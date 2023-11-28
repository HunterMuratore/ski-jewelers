import { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

const fontAwesomeMarkerSVG = `
<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#38c1c6}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
`;

const center = {
    lat: 40.58946965271275,
    lng: -74.50050895830216
}

function Map() {
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
    })

    const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

    const mapContainerStyle = {
        width: isMobile ? '325px' : '400px',
        height: isMobile ? '325px' : '400px',
        margin: '0 auto'
    };

    useEffect(() => {
        if (isLoaded) {
            setIsMapLoaded(true);
        }
    }, [isLoaded]);

    return (
        <>
            {!isMapLoaded ? <i className="fa-solid fa-spinner fa-spin"></i> : (
                <GoogleMap center={center} zoom={18} mapContainerStyle={mapContainerStyle}>
                    <Marker
                        position={center}
                        icon={{
                            url: `data:image/svg+xml,${fontAwesomeMarkerSVG}`,
                            scaledSize: new window.google.maps.Size(30, 30),
                        }}></Marker>
                </GoogleMap>
            )}
        </>
    )
}

export default Map
import React from 'react';
import { YMaps, Placemark, Map } from 'react-yandex-maps';
import './map.css';

const Ymap = () => {
    return (
            <YMaps>
                <div className="map">
                    <Map
                        width="100%"
                        height="500px"
                        defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 10,
                        }}
                    >
                        <Placemark geometry={[55.684758, 37.738521]} />
                    </Map>
                </div>
            </YMaps>
    )
}

export default Ymap

import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../styles/pages/city-map.scss';
import 'leaflet/dist/leaflet.css';

// Resources
import { FiPlus } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg';
import { Map, TileLayer } from 'react-leaflet';

function CityMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="map pin" />

                    <h2>Select a rescue from the map</h2>
                    <p>Many puppies and kittens await for a forever home :)</p>
                </header>

                <footer>
                    <strong>Winnipeg</strong>
                    <span>Manitoba</span>
                </footer>
            </aside>

            <Map center={[49.887229, -97.2105753]} zoom={15} style={{ width: '100%', height: '100%' }}>
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="create-rescue">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default CityMap;

import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import localImg from '../images/Local.svg';

import '../styles/pages/orfanatos.css';

function Orfanatos() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={localImg} alt="point-location"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças e adolescentes estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Sabará</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map 
        center={[-19.8872984,-43.8649763]}
        zoom={15}
        style={{ width:'100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>
      
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </div>
  );
}

export default Orfanatos;
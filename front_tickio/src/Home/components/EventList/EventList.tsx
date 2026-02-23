import React from 'react';
import { Link } from 'react-router-dom';
import './EventList.css';

export interface Evento {
  id: number;
  nombre: string;
  fecha_inicio: string;
  distrito: string;
  tipoEvento: string;
  imagen?: string;
  descripcion?: string;
}

interface EventListProps {
  eventos: Evento[];
}

const EventList: React.FC<EventListProps> = ({ eventos }) => {

  const formatDistrito = (text: string) => {
    if (!text) return "";
    if (text === "BRE_A") return "Breña";
    return text.toLowerCase().replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const getGenericImage = (tipoEvento: string) => {
    switch (tipoEvento) {
      case 'CONCIERTO':
        return 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&q=80&w=800';
      case 'DEPORTE':
        return 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&q=80&w=800';
      case 'TEATRO':
        return 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&q=80&w=800';
      case 'TRENDING':
        return 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&q=80&w=800';
      default:
        return 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&q=80&w=800';
    }
  };

  if (!eventos || eventos.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', color: '#333', fontFamily: "'Segoe UI', 'Roboto', sans-serif"}}>
        <h3>No se encontraron eventos</h3>
        <p>Intenta cambiar los filtros de búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="event-list-container">
      <h2 className="event-list-title">Próximos Eventos</h2>

      {/* ✅ ESTE ES EL CAMBIO CLAVE: ahora usa grid por CSS */}
      <div className="event-cards-wrapper">
        {eventos.map((evento) => {
          const imageUrl = evento.imagen || getGenericImage(evento.tipoEvento);

          return (
            <div key={evento.id} className="event-card event-card--wide">
              {/* Imagen */}
              <div
                className="event-card-cover"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              />

              {/* Texto */}
              <div className="event-card-body">
                <div>
                  <div className="event-card-top">
                    <h3 className="event-card-name">{evento.nombre}</h3>
                    <span className="event-card-tag">{evento.tipoEvento}</span>
                  </div>

                  <p className="event-card-meta">
                    <strong>Fecha:</strong> {new Date(evento.fecha_inicio).toLocaleDateString()}
                  </p>

                  <p className="event-card-meta">
                    <strong>Lugar:</strong> {formatDistrito(evento.distrito)}
                  </p>
                </div>

                <div className="event-card-cta">
                  <Link to={`/evento/${evento.id}`} className="event-card-link">
                    Ver Entradas
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
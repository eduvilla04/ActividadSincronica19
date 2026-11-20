import { Link } from 'react-router';
import InstallButton from '../components/InstallButton.jsx';

export default function HomePage() {
  return (
    <section className="portada">
      <p className="sobrelinea">Módulo 9 · Lección 6</p>
      <h1>Datos remotos con una copia local- Juan Villavicencio</h1>
      <p className="portada__texto">
        El service worker usa <code>NetworkFirst</code> para DummyJSON: intenta la red
        y, si no responde en tres segundos, devuelve la última respuesta guardada. Así
        el catálogo puede mostrarse sin conexión después de una primera visita.
      </p>
      <div className="portada__acciones">
        <Link className="boton boton--primario" to="/productos">
          Cargar productos
        </Link>
        <InstallButton />
      </div>
      <div className="portada__rasgos">
        <article>
          <h2>NetworkFirst</h2>
          <p>La red tiene prioridad, pero la caché evita una pantalla vacía.</p>
        </article>
        <article>
          <h2>Imágenes</h2>
          <p>Las imágenes se guardan con <code>CacheFirst</code>.</p>
        </article>
        <article>
          <h2>Offline</h2>
          <p>El aviso superior indica cuándo se están usando datos cacheados.</p>
        </article>
      </div>
    </section>
  );
}

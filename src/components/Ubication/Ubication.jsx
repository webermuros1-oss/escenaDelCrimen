function Ubication() {
  return (
    <div className="ubication">
      <h1>Ubicación</h1>
      <iframe
        src="https://maps.app.goo.gl/JKengMjXpWSSD7Cg6"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Ubication;

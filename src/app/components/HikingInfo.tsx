interface HikingInfoProps {
  partenza: string;
  arrivo: string;
  durata: string;
  lunghezza: string;
  dislivello: string;
  difficolta: string;
  momentoMigliore: string;
}

export default function HikingInfo({
  partenza,
  arrivo,
  durata,
  lunghezza,
  dislivello,
  difficolta,
  momentoMigliore,
}: HikingInfoProps) {
  return (
    <>
      <h2>Informazioni Pratiche</h2>
      <div className="article-info-compact">
        <div className="info-row">
          <span className="info-label"><i className="fas fa-map-marker-alt"></i> Partenza: </span>
          <span className="info-value">{partenza}</span>
        </div>
        <div className="info-row">
          <span className="info-label"><i className="fas fa-flag-checkered"></i> Arrivo: </span>
          <span className="info-value">{arrivo}</span>
        </div>
        <div className="info-row">
          <span className="info-label"><i className="fas fa-clock"></i> Durata: </span>
          <span className="info-value">{durata}</span>
        </div>
        <div className="info-row">
          <span className="info-label"><i className="fas fa-route"></i> Lunghezza: </span>
          <span className="info-value">{lunghezza}</span>
        </div>
        <div className="info-row">
          <span className="info-label"><i className="fas fa-mountain"></i> Dislivello: </span>
          <span className="info-value">{dislivello}</span>
        </div>
        <div className="info-row">
          <span className="info-label"><i className="fas fa-heart-pulse"></i> Difficoltà: </span>
          <span className="info-value">{difficolta}</span>
        </div>
        <div className="info-row">
          <span className="info-label"><i className="fas fa-sun"></i> Momento migliore: </span>
          <span className="info-value">{momentoMigliore}</span>
        </div>
      </div>
    </>
  );
}

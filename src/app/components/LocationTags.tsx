interface LocationTagsProps {
  regione?: string | null;
  provincia?: string | null;
  luogo?: string | null;
}

export default function LocationTags({ regione, provincia, luogo }: LocationTagsProps) {
  if (!regione && !provincia && !luogo) return null;

  return (
    <div className="location-tags">
      {regione && (
        <span className="location-tag location-tag-regione">
          <i className="fas fa-map"></i> {regione}
        </span>
      )}
      {provincia && (
        <span className="location-tag location-tag-provincia">
          <i className="fas fa-map-pin"></i> {provincia}
        </span>
      )}
      {luogo && (
        <span className="location-tag location-tag-luogo">
          <i className="fas fa-location-dot"></i> {luogo}
        </span>
      )}
    </div>
  );
}

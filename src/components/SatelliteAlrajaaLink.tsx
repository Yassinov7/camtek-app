type SatelliteAlrajaaLinkProps = {
  label?: string;
  url?: string;
  className?: string;
  title?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export default function SatelliteAlrajaaLink({
  label = "زيارة ستلايت الرجاء",
  url = "https://satellitealrajaa.com",
  className = "inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-orange-400 transition",
  title = "Visit Satellite Alrajaa",
  target = "_blank",
}: SatelliteAlrajaaLinkProps) {
  return (
    <a
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      title={title}
      className={className}
    >
      {label}
    </a>
  );
}

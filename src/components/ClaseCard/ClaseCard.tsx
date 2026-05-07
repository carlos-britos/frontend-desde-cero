import { Link } from "react-router";
import "./ClaseCard.css";

interface ClaseCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export function ClaseCard({
  number,
  title,
  description,
  tags,
  href,
}: ClaseCardProps) {
  return (
    <Link to={href} className="clase-card card">
      <span className="clase-card__number">{number}</span>
      <h3 className="clase-card__title">{title}</h3>
      <p className="clase-card__desc text-secondary">{description}</p>
      {tags.length > 0 && (
        <div className="clase-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="clase-card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}

import css from './ImageCard.module.css';
export default function ImageCard({ value, onOpenModal }) {
  return (
    <div className={css.imageContainer} onClick={() => onOpenModal(value)}>
      <img
        className={css.image}
        src={value.urls.small}
        alt={value.alt_description}
      />
    </div>
  );
}

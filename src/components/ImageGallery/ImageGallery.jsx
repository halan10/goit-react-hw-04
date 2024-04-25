import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onOpenModal }) {
  return (
    <div>
      <ul className={css.photosList}>
        {items.map(item => (
          <li key={item.id}>
            <ImageCard value={item} onOpenModal={onOpenModal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

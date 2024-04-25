import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button className={css.btn_grad} onClick={onLoadMore}>
      Load more
    </button>
  );
}

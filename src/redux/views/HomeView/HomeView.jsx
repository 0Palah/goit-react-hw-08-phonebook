import css from './HomeView.module.css';

const HomeView = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        WELCOME
        <span role="img" aria-label="Иконка приветствия">
          🖖🏼
        </span>
      </h1>
    </div>
  );
};

export default HomeView;

import css from './HomeView.module.css';

const HomeView = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        Приветственная страница нашего сервиса{' '}
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};

export default HomeView;

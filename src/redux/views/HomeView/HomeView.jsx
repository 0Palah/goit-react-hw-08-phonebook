// import { Outlet } from 'react-router-dom';
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
      {/* <Outlet /> */}
    </div>
  );
};

export default HomeView;

import estilos from './Banner.module.scss';

const Banner = () => {
  return (<section className={estilos.BannerArea}>
    <div className={estilos.Container}>
      <h1 className={estilos.Titulo}>Skina da Batata</h1>
      <p>A Skina mais famosa de todas</p>
    </div>
  </section>)
}

export default Banner
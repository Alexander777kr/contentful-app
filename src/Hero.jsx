import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae hic
            voluptas repellat laboriosam dolorum natus iure aspernatur neque
            molestias, pariatur molestiae mollitia reiciendis odio ipsum
            expedita veritatis. Recusandae, quo quia.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;

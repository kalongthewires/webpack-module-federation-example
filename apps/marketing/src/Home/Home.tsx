import styles from "./styles.css";

const Home = () => {
  return (
    <div>
      <style>{styles}</style>
      <h2>Home</h2>

      <p>
        Something short and leading about the collection below -- its contents,
        the creator, etc. Make it short and sweet, but not too short so folks
        don't simply skip over it entirely.
      </p>

      <div className="gallery">
        <img
          className="gallery__image"
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
        <img
          className="gallery__image"
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
        <img
          className="gallery__image"
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
        <img
          className="gallery__image"
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
        <img
          className="gallery__image"
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
        <img
          className="gallery__image"
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
      </div>
    </div>
  );
};

export default Home;

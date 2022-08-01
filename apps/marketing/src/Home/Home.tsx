import { gallery, galleryImage } from "./styles";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>

      <p>
        Something short and leading about the collection below -- its contents,
        the creator, etc. Make it short and sweet, but not too short so folks
        don't simply skip over it entirely.
      </p>

      <div css={gallery}>
        <img
          css={galleryImage}
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
        <img
          css={galleryImage}
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
        <img
          css={galleryImage}
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
        <img
          css={galleryImage}
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
        <img
          css={galleryImage}
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
        <img
          css={galleryImage}
          src="http://placekitten.com/410/410"
          alt="Kitten"
        />
      </div>
    </div>
  );
};

export default Home;

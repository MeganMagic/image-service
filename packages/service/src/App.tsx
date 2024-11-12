import imageAsset from "./assets/asset.png";

const App: React.FC = () => {
  return (
    <div>
      <h1>hello world</h1>
      <h3>external image</h3>
      <img src="image.png" />

      <h3>internal image</h3>
      <img src={imageAsset} />
    </div>
  );
};

export default App;

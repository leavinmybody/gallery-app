import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./components/Card";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const apiKey = "30504349-d75e2a792b573005627c034e6";
    const fetchImages = async () => {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${apiKey}&q=${search}&image_type=photo&pretty=true`
      );
      setImages(response.data.hits);
      setLoading(false);
    };
    fetchImages();
  }, [search]);

  console.log(images);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setSearch(text)} />
      {!loading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}
      {loading ? (
        console.lo
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

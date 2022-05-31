import PaintingCard from "../paintingCard/PaintingCard";
import './HomePage.css'


export default function HomePage(props) {

    const { paintings, authors, locations } = props;

    if (
        paintings.length === 0 ||
        authors.length === 0 ||
        locations.length === 0
    ) return 'loading'



    return (
        <main className="gallery__paintings">
            {paintings.map(painting =>
                <PaintingCard
                    painting={painting}
                    author={authors.find(author => author.id === painting.authorId)}
                    location={locations.find(location => location.id === painting.locationId)}
                    key={painting.id}
                />)}
        </main>
    )
}
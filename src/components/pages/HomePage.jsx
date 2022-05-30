import PaintingCard from "../paintingCard/PaintingCard";


export default function HomePage(props) {

    const { paintings, authors, locations } = props;

    console.log(paintings)
    // console.log(authors)
    // console.log(locations)

    if (
        paintings.length === 0 ||
        authors.length === 0 ||
        locations.length === 0
    ) return 'loading'

    return (
        <main>
            {paintings.map(painting =>
                <PaintingCard
                    painting={painting}
                    author={authors.find(author => author.id === painting.authorId)}
                    location={locations.find(location => location.id === painting.locationId)}
                    key ={painting.id}
                />)}
        </main>
    )
}
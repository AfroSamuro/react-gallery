



export default function Header(props) {

    return (
        <header>
            <div>
                <img src="" alt="logo" />
                <img src="" alt="theme" />
            </div>
            <div>
                <input type="text" placeholder="Name" />
                <select defaultValue={'Authors'}>
                    <option disabled>Authors</option>
                </select>
                <select defaultValue={'Locations'}>
                    <option disabled>Locations</option>
                </select>
                <select defaultValue={'Created'}>
                    <option disabled>Created</option>
                </select>
            </div>
        </header>
    )
}
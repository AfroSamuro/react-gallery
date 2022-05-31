import './Header.css'

export default function Header(props) {

    return (
        <header className='header'>
            <div className='header__logoSwitch'>
                <img className='logoSwitch__logo' src="" alt="logo" />
                <img className='logoSwitch__switch' src="" alt="theme" />
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
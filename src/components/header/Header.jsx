import './Header.css'
import logo from '../../images/logo.svg'
import sunBlack from '../../images/sunBlack.svg'
import sunWhite from '../../images/sunWhite.svg'

export default function Header(props) {

    const {handleChangeTheme, isWhite} = props;

    return (
        <header className='header'>
            <div className='header__logoSwitch'>
                <img className='logoSwitch__logo' src={logo} alt="logo" />
                <img className='logoSwitch__switch' src={isWhite ? sunBlack : sunWhite} alt="theme" onClick={handleChangeTheme}/>
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
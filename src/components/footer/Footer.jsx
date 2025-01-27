import './Footer.css'
import facebookLogo from '../../assets/images/facebook_Logo.png'
import whatsappLogo from '../../assets/images/whatsapp_Logo.png'
import Logo from '../../assets/images/Logo_JR.png';

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Facebook logo" />
            <div className="footer__content">
                <p className="footer__title">Información de Contacto</p>
                <p className="footer__paragraph">WhatsApp: <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2F3jGAtPn%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3-3gZe3sqPpV6Vjn2wfQ7MjjFF_aJhmD-LK7h8Tea6lgy7Mz_XTksgYTI_aem_OnGSvg0RiiQotl3CqC8i_g&h=AT0vua8IdEJrwD6E7aCDXWkTE5a2KM8THqDtOx_ia6lK2m2DIYfzVafm2GrLDNnLKoI1_Zz_01nRJBnjjYQHVUYv5-wFrBmfT7bVPzs3DXylgW5PWVBG2ebi1q2aHBgRBeoH&__tn__=-UK-R&c[0]=AT2dBrldhAzn9AcNCt3rRavuT_IFe2UZFPsSqZGv7lAUOYjyxXD_6pQUTznZqYDm4BhC_8oOYa0wvii-H5i4EWLpk-AeTSx2sUPJhj7VGSkcBZwy2P5wvIutjw-3QnkaMYAl0cCycSXAC_oxidqtR0ZkhVEjS4FSseqCrmo-2evPTjtBw8S2iH0-mTWCQlgx4Szw11O76p7s63eXD6ZUuIzPN5A">961 814 053</a></p>
                <img className="footer__image-marginBottom" src={whatsappLogo} alt="WhatsApp logo" height={90} />
            </div>
            <div className="footer__content">
                <p className="footer__title">¡Siguenos en nuestra red social!</p>
                <img className="footer__image-marginTop" src={facebookLogo} alt="Facebook Logo" height={90}/>
            </div>
        </footer>
    );
}

export default Footer
import { Link } from "react-router-dom";
import "./Breadcrumb.css"
import { useTranslation } from "react-i18next";

const Breadcrumb = ({ items }) => {

    const { t } = useTranslation();

    return(
            <nav className="bread-nav">
                <ol className="breadcrumb">
                    {items.map( (item, index) => {
                        if(index === items.length-1)
                            return <li className="breadcrumb-item active" aria-current="page">{t(item.name)}</li>;  
                            return <li className="breadcrumb-item"><Link to={item.url}>{t(item.name)}</Link></li>
                            } )}
                </ol>
            </nav>
    );

}

export default Breadcrumb
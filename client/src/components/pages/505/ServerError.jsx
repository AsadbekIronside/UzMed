import { Link } from 'react-router-dom';

const ServerError = () => {

    return (
        <div className="my-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center my-5">
                            <h1 className="fw-bold text-error">5 <span>0<img src={require('../../../images/error-img.png')} alt="error-img" className="w-25"/></span> 0</h1>
                            <h3 className="text-uppercase">Internal Server Error</h3>
                            <div className="mt-5 text-center">
                                <Link className="btn btn-danger waves-effect waves-light" to="/">Asosiy pagega qaytish</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServerError;
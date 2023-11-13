
const UserPayment = () => {
    return(
        <div className="user-payment-body">
            <h3 className="user-h">To'lovlar tarixi</h3>
            <div className='payment-check'>
                <div className='payment-user-photo'>
                    <img src={require('../../../images/default_user.png')} alt="user-img"></img>
                </div>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between w-100'>
                        <span>BONUS:</span>
                        <small className='text-muted'>5,000 UZS</small>
                    </div>
                    <div className='col-12 d-flex justify-content-between w-100'>
                        <span>CREDIT NUM:</span>
                        <small className='text-muted'>242343243</small>
                    </div>
                    <div className='col-12 d-flex justify-content-between w-100'>
                        <span>1234 4*** **** 9999</span>
                        <small className='text-muted'>09:20 03.11.2023</small>
                    </div>
                </div>
                <span className='text-muted'>Ro'yxatdan o'tilganlik uchun</span>
            </div>
        </div>
    )
}

export default UserPayment
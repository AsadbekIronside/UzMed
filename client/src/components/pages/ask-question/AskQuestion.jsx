import "./AskQuestion.css";

const AskQuestion = () => {
    return(
        <div className="ask-question-parent">
            <div className='ask-girl-img'>
                <img src={require('../../../images/gril5.jpg')} alt='girl'/>
            </div>
            <div className="ask-question">
                <h3 className="display-6">Sog'lig'ingizdagi muammolarga TOP shifokorlarimizdan bepul maslahat oling.</h3>
                <div className="ask-question-area">
                    <h5>Savolingizni yozing.</h5>
                    <textarea rows={5} cols={5} placeholder="E.g. Men 24 yoshli uylanmagan yigitman. Meni sochlarim to'kilishni boshlagan. Butunlay kal bo'lip qolishimdan oldin, menga soch to'kilishini to'xtatadigan dorimi yozib bering, Iltimos!"/>
                    <h5 className="mt-3">Men qidiryapman</h5>
                    <label><input type="radio" name="ask-radio" checked/> &nbsp;&nbsp;Faqatgina ma'lumot</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    
                    <label><input type="radio" name="ask-radio"/> &nbsp;&nbsp;Davolanish yo'riqnomasi</label>
                    <h5 className="mt-3">Bildirishnomalarni qayerga jo'nataylik?</h5>
                    <div className="ask-inputs">
                        <div><input placeholder="Email (ixtiyoriy)"/></div>
                        <div><input readOnly value={"+998"}/></div>
                        <div><input placeholder="Tel raqam (ixtiyoriy)"/></div>
                    </div>
                    <button>Bepul Savol So'rash</button>
                </div>
            </div>
            <div className="ask-guarantee">
                <h3>UzMed kafolat beradi</h3>
                <div className="guarantee-divs">
                    <div>
                        <span><i className="fa-solid fa-user-lock fa-2x"></i></span>
                        <p className="guarantee-p">100% Ma'lumotlar Xavfsizligi</p>
                        <p className="text-muted">Biz sizning shaxsiy ma'lumotlaringizni xavfsizligini ta'minlaymiz.</p>
                    </div>
                    <div>
                        <span><i className="fa-solid fa-user-doctor fa-2x"></i></span>
                        <p className="guarantee-p">Malakali Shifokorlar</p>
                        <p className="text-muted">Barcha shifokorlarimiz ko'p yillik tajribaga ega, o'z sohasida yetakchilardan.</p>
                    </div>
                    <div>
                        <span><i className="fa-regular fa-clock fa-2x"></i></span>
                        <p className="guarantee-p">Tez Javoblar</p>
                        <p className="text-muted">Siz savollaringizga uzog'i 24 soat ichida javoblar olasiz.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AskQuestion;
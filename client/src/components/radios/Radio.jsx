import "./Radio.css"

const Radio = ({ props }) => {

    const {name, values, changeHandler} = props;
    return(
       <>
        {values.map((value, index) =><div className='form-check'>
                                        <input className='form-check-input' id={name+index} name={name} type='radio' onChange={changeHandler}></input>
                                        <label className='form-check-label' htmlFor={name+index}>{value}</label>
                                    </div>)}
       </>
    )

}

export default Radio
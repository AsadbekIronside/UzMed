const Checkbox = ({props}) => {

    const { name, values, changeHandler } = props;

    return(
        <>
            {values.map((item, index) => <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id={name+index} name={name} onChange={changeHandler}/>
                                            <label className="form-check-label" htmlFor={name+index}>
                                                {item}
                                            </label>
                                         </div>)}
        </>
    );

}

export default Checkbox
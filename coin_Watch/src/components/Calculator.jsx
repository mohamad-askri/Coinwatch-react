


export function Calculator () {

        return (
            <>

                <div className="container-fluid">
                    <div className="section-header text-start text-uppercase mb-3">
                        <h2>Calculator</h2>
                    </div>
                    <div className="row">
                        <div className="input-group">
                            <input type="text" className="form-control extension-input" value="1" placeholder="0"
                                   aria-label="Enter text" aria-describedby="basic-addon2"/>
                                <button className="btn appended-input-btn dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false" >  </button>
                        </div>
                        <span className="exchange-icon">
                                <i className="fas fa-exchange-alt m-3 fa-rotate-90"></i>
                            </span>
                        <div className="input-group">
                            <input type="text" className="form-control extension-input" value="67,140.39"
                                   aria-label="Enter text" aria-describedby="basic-addon2"  />
                                <span title="Change the Quote Currency through settings">
                                    <button className="btn appended-input-btn disabled dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                            aria-expanded="false"></button>
                                </span>

                        </div>

                    </div>
                </div>

            </>
        )
    }


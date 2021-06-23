import React from "react";
import { Link } from 'react-router-dom'

const SeachNav = ({placeholder, link="/",label="" ,col=6}) =>{
    
    return(
		<>
		<div className="container">
			<div className="row">
				<div className="col-md4">
					<h5>{label}</h5>
				</div>
				
				<div className={`input-group get-member col-lg-${col} mb-3`}>
					<input type="text" className="form-control" aria-label="Get member" aria-describedby="Get member" placeholder={placeholder} />
					<div className="input-group-append">
						<Link to={link}>
							<button className="btn btn-primary text-white" style={{borderTopRightRadius:'0.3rem', borderBottomRightRadius:'0.3rem'}} type="button" id="get-member"><i className="fas fa-search"></i></button>
						</Link>
					</div>
						<button type="button" id="btn-filters" className="btn btn-link ml-2" style={{backgroundColor:'transparent', color:'#66A3EC', borderColor:'transparent'}} alt="Filters" title="Filters"><i className="fas fa-filter"></i></button>
					</div>
			</div>	
		</div>
        </>
    );
}
export default SeachNav;
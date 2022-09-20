import React from 'react';
import './User.css';
const userOutput = (props) => {
    return  <div className='User'>
        <p onClick={props.click}>UserName:{props.username}</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value={props.username}/>
        <p>
        Boosting and encouraging use of energy efficiency technologies would lead to
        reduced energy needs for powering, heating, and cooling of homes, businesses,
        and industries. This would be effective in reducing global warming as the
        problem is largely contributed to by the energy used for cooling, heating,
        and power services in industries, businesses, and homes. In the transportation
        sector for instance, switching to fuels that are low in carbon, and improving
        fuel efficiency in terms of miles per gallon would reduce the amount of
        heat-trapping emissions released into the atmosphere.
        Additionally, revving up renewable energy could reduce global warming.
        <br></br>
        The vast majority of energy needs worldwide can be potentially met by such
        renewable sources of energy as bioenergy, geothermal, wind, and solar energy
        that apart from reducing pollution, would also create jobs. According to the
        Environmental Protection Agency’s 2012 report, coal-fired power plants produce
        approximately 25 percent of total U.S. global warming emissions while natural
        gas-fired power plants produce 6 percent of total emissions. In contrast, most
        renewable energy sources produce little to no global warming emissions.
        Conclusively, boosting energy efficiency and adopting renewable energy would
        reduce global warming.
        </p>
    </div>

};

export default userOutput;
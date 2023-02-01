import React from 'react'

import PropTypes from "prop-types";

import CIcon from "@coreui/icons-react";
import { cilList, cilShieldAlt,cilMoodBad  } from '@coreui/icons';

const style = {
    outer : {
        padding: 30,
        display:'flex',
        alignItems:"center",
        justifyContent : "center",
        width:"100%",
        height:"100%",
    },
    inner : {
        padding: 30,
        textAlign : "center",
        marginTop: "20px",
        marginBottom: "20px",
    },
}

function ErrorComponent({log}) {
    return ( 
        <div style={style.outer}>
            <div style={style.inner}>
                <CIcon icon={cilMoodBad} size="6xl"/>
                <div style={{margin:"25x"}}></div>
                <h4 style={{margin:"5px"}}>{log}</h4>
            </div>
        </div>
     );
}

ErrorComponent.propTypes = {
    log : PropTypes.string.isRequired,
};
export default ErrorComponent;
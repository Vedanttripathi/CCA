import React from 'react';
import './Arrow.css'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Arrow = (props) => {
    return (
        <FontAwesomeIcon icon={faArrowRight} size="2x" />
    );
}

export default Arrow;
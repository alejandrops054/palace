/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/
import React from "react";
import PropTypes from "prop-types";
const Verde = {
  color: "#00af9f",
};

/* props = {
    string title,
    string text
}*/
function InfoMembersNoContainer({ title, text }) {
  return (
    <>
      <br />
      <h7>{title}:</h7>
      <p style={Verde}>{text}</p>
    </>
  );
}

InfoMembersNoContainer.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default InfoMembersNoContainer;

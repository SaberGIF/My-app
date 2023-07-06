import { NavLink } from "react-router-dom";
import React from "react";
import {
  addMessageActionCreator,
  sendMessageCreator,
  updateNewMessageBodyActionCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBodyCreator: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessageCreator: () => {
      dispatch(sendMessageCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);


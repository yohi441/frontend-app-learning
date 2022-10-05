import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../output.css'
import { Spinner } from '@edx/paragon';

export default class PageLoading extends Component {
  renderSrMessage() {
    if (!this.props.srMessage) {
      return null;
    }

    return (
      <span className="sr-only">
        {this.props.srMessage}
      </span>
    );
  }

  render() {
    return (
      <div>
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{
            height: '50vh',
          }}
        >
          <Spinner animation="border" variant="" className="tw-text-primaryCrimson" screenReaderText={this.renderSrMessage()} />
        </div>
      </div>
    );
  }
}

PageLoading.propTypes = {
  srMessage: PropTypes.node.isRequired,
};

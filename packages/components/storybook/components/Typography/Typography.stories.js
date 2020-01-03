import PropTypes from 'prop-types';

import {
  HEADING1,
  HEADING2,
  HEADING3,
  HEADING4,
  BUTTON1,
  BUTTON2,
  BUTTON3,
  BODY1,
  BODY2,
  LINK1,
  LINK2,
  CAPTION,
} from '../../../src/modules/core/Typo';

const ofProps = () => null;

ofProps.propTypes = {
  variant: PropTypes.oneOfType([
    PropTypes.oneOf([
      HEADING1,
      HEADING2,
      HEADING3,
      HEADING4,
      BUTTON1,
      BUTTON2,
      BUTTON3,
      BODY1,
      BODY2,
      LINK1,
      LINK2,
      CAPTION,
    ]),
  ]),
};

ofProps.defaultProps = {
  variant: 'body1',
};

export default {
  title: 'Components|Typography',
  includeStories: [],
};

export { ofProps };
export { default as variant } from './examples/Variant';

import PropTypes from 'prop-types';

const ofProps = () => null;

ofProps.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.oneOf(['primary', 'inverse', 'elevated', 'outline'])]),
};

ofProps.defaultProps = {
  type: 'primary',
};

export default {
  title: 'Components|Button',
  includeStories: [],
};

export { ofProps };
export { default as text } from './examples/Text';
export { default as disabled } from './examples/Disabled';
export { default as onPress } from './examples/OnPress';
export { default as size } from './examples/Size';
export { default as type } from './examples/Type';

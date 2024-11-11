import PropTypes from "prop-types";

export function RenderName(props) {
  return (
    <>
      <div>{props.name}</div>
    </>
  );
}

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
  name: "Zach",
};

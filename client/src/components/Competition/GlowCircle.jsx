import PropTypes from "prop-types";

/**
 * GlowCircle component renders a circular element with a glowing border.
 *
 * @param {string} className - Additional CSS classes to apply to the component.
 * @returns {JSX.Element} A glowing circle element.
 */

function GlowCircle({ className = " " }) {
  return (
    <div className={`relative ${className}`}>
      {/* Base circle with dark background */}
      <div className="absolute inset-0 rounded-full bg-black" />

      {/* Main border with glow */}
      <div className="absolute inset-0 rounded-full border-[3px] border-[#A7F818]" />

      {/* Inner glow along the border */}
      <div
        className="absolute -inset-[2px] rounded-full blur-sm"
        style={{
          boxShadow: "inset 0 0 55px 10px #588704",
        }}
      />
    </div>
  );
}

GlowCircle.propTypes = {
  className: PropTypes.string,
};

export default GlowCircle;

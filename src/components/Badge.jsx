import PropTypes from "prop-types";

export default function Badge({ children }) {
  return (
    <span className="bg-[#dbeafe] text-[#1e40af] text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-[#1e3a8a] dark:text-[#93c5fd]">
      {children}
    </span>
  );
}
Badge.propTypes = {
  children: PropTypes.string.isRequired,
};

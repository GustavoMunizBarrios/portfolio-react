import PropTypes from "prop-types";

export default function SocialPill({ link, children }) {
  return (
    <a
      className="flex justify-center items-center
            py-1 px-2 gap-x-2 md:py-2 md:px-4
            text-xs md:text-base
            rounded-full border bg-white border-veryLightGray
            hover:bg-[#777a9257] hover:text-[#1e40af] dark:hover:text-[#93c5fd]
            focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
      target="_blank"
      rel="noopener noreferrer"
      href={link}
    >
      {children}
    </a>
  );
}
SocialPill.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";

const Dropdown = (props) => {
  // {img: "/img/", copy: "aldsjf"}

  const dropdownItems = props.map((item) => {
    item.img ? (
      <a href="#">
        <img src={item.img} alt={item.txt} />
        {item.txt}
      </a>
    ) : (
      <a href="#">{item.txt}</a>
    );
  });

  return (
    <div>
      <dropdownItems />
    </div>
  );
};

Dropdown.propTypes = {
  map: PropTypes.array.isRequired, // Example prop validation for 'map'
};

export default Dropdown;

import { images } from "../../../constants/images";

const Dropdown = () => {
  // {img: "/img/", copy: "aldsjf"}

  const dropdown_1 = [
    { img: images.iconTodo, txt: "Todo List" },
    { img: images.iconCalendar, txt: "Calendar" },
    { img: images.iconReminders, txt: "Reminders" },
    { img: images.iconPlanning, txt: "Planning" },
  ];

  const dropdownItems = dropdown_1.map((item) => {
    <a href="#">
      <img src={item.img} alt={item.txt} />
      {item.txt}
    </a>;
  });

  return <div></div>;
};

export default Dropdown;

import React from "react";
import Checkbox from "../../ui/checkbox/checkbox";
import { Ul, Li } from "../../styled";

// Радиокнопка
function CheckboxList({
  selectvalues, // массив выбранных значений
  labelComponent, // Компонент для отображения label
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  name, // имя
  onChange, // событие при изменении
  isGridList,
  onClickLabel = () => {}
}) {
  const handleChange = (value) => {
    const newValue = [...selectvalues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul $isGridList={isGridList}>
      {options.map((option, index) => (
        <Li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectvalues={selectvalues}
            isChecked={selectvalues.includes(option.value)}
            name={name}
            value={option.value}
            text={option.title}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
          />
        </Li>
      ))}
    </Ul>
  );
}

export default CheckboxList;

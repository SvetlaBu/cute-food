const products = [
  {
    id: 0,
    name: 'Мягкий сыр',
    description:
      "Мягкий сыр из пастеризованного коровьего молока. Идеально сочетается с фруктовым соком, теплым черным чаем или крепким кофе",
    price: 290,
    weight: 200,
    image: "https://i.ibb.co/9HXnVxx/image.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0,2 кг."
      },
      {
        property: "Срок годности",
        value: "30 суток"
      },
      {
        property: "Жирность",
        value: "30%"
      },
      {
        property: "Условия хранения",
        value: "от 5 до 8 °С."
      },
      {
        property: "Место происхождения",
        value: "Сергиев Посад"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: " 203 ккал. / 1107 кДж."
      },
      {
        property: "Пищевая ценность",
        value: "белки - 25,2 г., жиры - 17 г., углеводы - 3,6 г. на 100 г."
      }
    ]
  },
  {
    id: 1,
    name: 'Смесь сушеных фруктов',
    description:
      "Хурма, груши, яблоки и апельсины закружат Вас в вихре витаминов. Хорошее настроение и легкодоступное удовольствие гарантированы.",
    price: 260,
    weight: 200,
    image: "https://i.ibb.co/HXnFGgZ/image.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0,2 кг."
      },
      {
        property: "Срок годности",
        value: "30 суток"
      },
      {
        property: "Место происхождения",
        value: "Ростовская область"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: " 323 ккал. / 1407 кДж."
      },
      {
        property: "Пищевая ценность",
        value: "белки - 2,2 г., жиры - 0,7 г., углеводы - 43,6 г. на 100 г."
      }
    ]
  },
  {
    id: 2,
    name: 'Смесь орешков',
    description:
      "Спасет Вас от голода в любой ситуации. Самый свежий урожай, бережно сохраненный от сырости и плесени. Наконец-то Вы почувствуете вкус лучших орехов",
    price: 390,
    weight: 200,
    image: "https://i.ibb.co/SsqWg7p/image.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0,2 кг."
      },
      {
        property: "Срок годности",
        value: "30 суток"
      },
      {
        property: "Место происхождения",
        value: "Турция"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: " 603 ккал. / 2807 кДж."
      },
      {
        property: "Пищевая ценность",
        value: "белки - 25,2 г., жиры - 27 г., углеводы - 3,6 г. на 100 г."
      }
    ]
  },
  {
    id: 3,
    name: "Мед шандры",
    description:
      "Мед урожая 2023 года. Необычно нежный мед, собранный в степных просторах Горненского заповедника, раскрывается целой гаммой натуральной сладости.",
    price: 390,
    weight: 200,
    image: "https://i.ibb.co/sP2tmn3/image.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0,2 кг."
      },
      {
        property: "Срок годности",
        value: "24 месяца"
      },
      {
        property: "Условия хранения",
        value: "от 5 до 20 °С."
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: " 303 ккал. / 1407 кДж."
      },
      {
        property: "Пищевая ценность",
        value: "белки - 0 г., жиры - 0 г., углеводы - 35,6 г. на 100 г."
      }
    ]
  },
  {
    id: 4,
    name: "Бисквит",
    description:
      "Воздушный бисвит, легкий как облачко. В составе всего 4 элемента: мука, яйца, сахар и любовь.",
    price: 400,
    isChecked: true,
    weight: 700,
    image: "https://i.ibb.co/0jLL0Sx/image.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0,7 кг. (595-805 г.)."
      },
      {
        property: "Срок годности",
        value: "6 суток"
      },
      {
        property: "Место происхождения",
        value: "10 км от вас"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "285 ккал./865 кДж"
      },
      {
        property: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 8,7 г., углеводы - 30 г.; на 100 г."
      }
    ]
  },
  {
    id: 5,
    name: "Клубничное варенье",
    description:
      "Десерт с ароматом детства. Есть необязательно, можно просто любоваться его блеском на тарелочке и вдыхать чарующие пары сладкой клубники.",
    price: 500,
    weight: 600,
    image: "https://i.ibb.co/p355kTK/image.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0,6 кг. (495-705 г.)."
      },
      {
        property: "Срок годности",
        value: "30 суток"
      },
      {
        property: "Место происхождения",
        value: "Ростовская область"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "335 ккал./765 кДж"
      },
      {
        property: "Пищевая ценность",
        value: "белки - 0 г., жиры - 0, углеводы - 36 г.; на 100 г."
      }
    ]
  },
  {
    id: 6,
    name: 'Сухарики',
    description:
      "Легкие, хрустящие сухарики приготовлены по нашей оригинальной и сверхсекретной рецептуре.",
    price: 190,
    weight: 200,
    image: "https://i.ibb.co/2yXtZ0K/image.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0,2 кг."
      },
      {
        property: "Срок годности",
        value: "30 суток"
      },
      {
        property: "Место происхождения",
        value: "Ростовская область"
      }
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: " 363 ккал. / 1407 кДж."
      },
      {
        property: "Пищевая ценность",
        value: "белки - 10,2 г., жиры - 8 г., углеводы - 33,6 г. на 100 г."
      }
    ]
  }
  
];

export default products;

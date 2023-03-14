'use strict';

const enjoyhint_instance = new EnjoyHint({});

const enjoyhint_script_steps = [
  {
    'next .list-group__first': 'Шаг 1. Выберите уровень',
  },
  {
    'next .list-group_modify': 'Шаг 2. Выберите модуль',
  },
  {
    'click .card-body': 'Шаг 3. Начните тестирование',
  },
];

enjoyhint_instance.set(enjoyhint_script_steps);
enjoyhint_instance.run();

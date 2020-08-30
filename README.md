﻿# Портфолио - практика pug и less

## Запуск сборки проекта
В адресе проекта на ПК не должно быть кириллицы. Идеально — создайте с корне диска С: или D: папку "projects" и разместите в нее папку вашего проекта. У вас может получится что то похожее на это: C:\projects\webdev-project


1. Клонирование проекта к себе на ПК               
```sh
$ git clone https://github.com/matrix-web/webdev-project.git
```

2. Переходим в созданную папку
```sh
cd webdev-project
```

3. Устанавливаем все зависимости
```sh
$ npm install
```

4. Запускаем сборку
```sh
$ npm run dev
$ npm run build
```

### code guide

Соглашение по написанию кода.

* [SCSS] - CSS препроцессор (По личному усмотрению можете заменить на LESS, STYLUS, PostCSS)
* [Flexbox] - Для построения структуры страниц используются флексы
* [Bootstrap grid 4] - В сборке уже есть сетка от bootstrap-4
* [Табы] - Проверьте, что бы настройки отступов в редакторе были сделаны табами (это важно для PUG файлов)
* [Bem] - При написании кода используется BEM naming (Блок, Элемент, Модификатор)
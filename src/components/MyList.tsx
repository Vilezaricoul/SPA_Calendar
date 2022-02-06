import React, {FC, useEffect, useState} from 'react';
import classes from "./MyList.module.css"

const MyList: FC = () => {


    return (
		<div className={classes.myList}>
			<ul>
				<li>Стек React </li>
				<li>Функциональные компоненты, React-hooks</li>
				<li>Модульные стили. Сделал галочки ради, модуль для этого списка</li>
				<li>Роутинг React-router-dom или NextJS</li>
				<li>Redux/ReduxToolKit. Асинхронные экшены Redux-thunk или Redux-saga</li>
				<li>Работа с API с помощью клиента Axios</li>
			</ul>
		</div>
    );
};

export default MyList;
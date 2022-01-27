import {useEffect, useState} from "react";

import s from './Character.module.css'

export default function Character({item}) {
    const {id, name, species, gender, image} = item
    return (
        <div className={s.container}>
            <div className={s.item}>Id: {id}</div>
            <div className={s.item}>Name: {name}</div>
            <div className={s.item}>Species: {species}</div>
            <div className={s.item}>Gender: {gender}</div>
            <div>
                <img className={s.image} src={image} alt="Image"/>
            </div>
        </div>
    )
}
import style from '@/styles/HomePage.module.css'


export default function Categorys({ category, index, handleSelect }) {
    return (
        <li className={style.left}>
            <button href="/" onClick={(e) => handleSelect(category)}>{category}</button>
        </li>
    )
}

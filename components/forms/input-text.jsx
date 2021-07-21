import styles from './input-text.module.scss';

export const InputText = ({ name, label, placeholder, onChange, defaultValue }) => (<>
    {label && <label htmlFor={name} > {label} </label>}
    <input type='text' {...{ name, id: name, placeholder, onChange, defaultValue }} className={styles.input} />
</>)
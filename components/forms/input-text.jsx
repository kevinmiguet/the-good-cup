import styles from './input-text.module.scss';

export const InputText = ({ name, label, placeholder, onChange, defaultValue }) => (<>
    {label && <label for={name} > {label} </label>}
    <input type='text' {...{ name, id: name, placeholder, onChange, defaultValue }} className={styles.input} />
</>)
import styles from '@/styles/Profile.module.scss';

export default function Profile(props) {

    function handleProfile(){
        props.profileChosen(props.name)
    }

    return (
        <>
            <button className={`${styles.profile}`} onClick={handleProfile}>
                <div className={`${styles.profileIcon} my-2`}></div>
                <h6 className={`text-center font-weigth-light`}>{props.name}</h6>
            </button>
        </>
    )
}

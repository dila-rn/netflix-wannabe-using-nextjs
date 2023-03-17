import styles from '@/styles/Profile.module.scss';

export default function Profile(props) {

    function handleProfile(){
        props.profileChosen(props.id)
    }

    return (
        <>
            <button className={`${styles.profile}`} onClick={handleProfile}>
                <div className={`${styles.profileIcon} my-2`}>
                    <img src={props.avatar} alt="" />
                    
                </div>
                <h6 className={`text-center font-weigth-light`}>{props.name}</h6>
            </button>
        </>
    )
}

import styles from '@/styles/AboutApp.module.css'

export default function AboutApp() {
    return (
        <div className={styles.container}>
            <h3>We Also Have an App!</h3>
            <p>Want to be the first notified about our launch date?</p>
            <form>
                <input type="text" placeholder="Your Email Adress..." />
                <input type="checkbox" name="" id="" placeholder="I would like to recieve news about HiLo’s journey by email." />
                <input type="submit" name="" id="" placeholder="Notify me!" />
            </form>
        </div>
    )
}

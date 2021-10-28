import styles from './Section.module.css'
import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
    return (
        <section>
            <p className={styles.section}>{title}</p>
            {children}
        </section>
    )
}
export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
}
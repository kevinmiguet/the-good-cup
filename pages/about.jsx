
const About = ({ data }) => (
    <h1>About the good coupe {data.text}</h1>
)

export async function getStaticProps() {
    // Pass data to the page via props
    return {
        props: {
            data: {
                text: 'hello good coupe is really on the way!!'
            }
        }
    }
}

export default About

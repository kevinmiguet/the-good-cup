import toto from "../server/api/beans"

const About = ({ data }) => (
    <>About the good coupe {data.text}</>
)

export async function getStaticProps() {
    const res = toto.handler()
    const body = (await res).body
    const data = JSON.parse(body)
    // Pass data to the page via props
    return { props: { data } }
}

export default About
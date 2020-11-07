const About = ({ data }) => (
    <>About the good coupe {data.text}</>
)

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`${process.env.API_URL}/beans`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default About
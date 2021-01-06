
const About = ({ data }) => (
    <h1>About the good coupe {data.text}</h1>
)

export async function getStaticProps(context) {
        const res = await fetch(`https://.../beans`)
        const data = await res.json()
      
        if (!data) {
          return {
            notFound: true,
          }
        }

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

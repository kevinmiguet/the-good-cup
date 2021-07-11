


const About = ({ data }) => (
    <>
    <header>A Worldwide community coffee lovers!</header>
    <h1>Having fun tantalising your taste buds with ze good coupe {data.text}</h1>
    <span role="img" aria-label="sheep">🐑</span>
    </>
)

export async function getStaticProps() {
    // Pass data to the page via props
    return {
        props: {
            data: {
                text: 'proudly brought to you by the best roasters around the globe!!', 
               
            }
        }
    }
}

export default About

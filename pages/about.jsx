


const About = ({ data }) => (
    <>
    <title>A Worldwide community coffee lovers!</title>
    <header>A Worldwide community coffee lovers!</header>
    <h1>Having fun tantalising your taste buds with ze good coupe {data.text}</h1>
    <span role="img" aria-label="sheep">🐑</span> <br></br>
     
     <div>
         <button>Find your coffee</button> <button>Join the community</button>
     </div>
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

import Navbar from "../components/navbar";




const About = ({ data }) => (
    <>
    <title>Worldwide community for coffee lovers!</title>
    <Navbar/>
    <div className="bg-coffee-pattern bg-contain">
    <header>A worldwide community for coffee lovers!</header>
    <h1>Having fun tantalising your taste buds with ze good coupe {data.text}</h1>
    <span role="img" aria-label="cup of coffee">&#9749; 	</span> 
     
     <div>
         <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Find your coffee</button> 
         <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">Join the community</button>
     </div>
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

export const Button = ({type, onClick, value}) => (
    <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" 
    {...{type, onClick}}> {value} </button>
)
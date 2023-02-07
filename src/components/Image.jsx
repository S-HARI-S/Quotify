    export default function Image(props){
        return (
            <>
           <a href="#/" className=" bg-gray-800  rounded-3xl p-5 shadow hover:bg-gray-500">
            <img key={props.id} src={props.urls.small} className="h-52 w-full object-cover rounded-3xl" loading="lazy"/>
           </a>
            </>

            
        )
    }
import clsx from "clsx";

export default function Card(props){
    return (
        <article 
            //className={
            //"bg-[rgb(32_33_39)] p-6 rounded-xl space-y-4" +
            //" " +
            //props.className +
            //" " +
            //(props.isNew === true ? 'border border-yellow-400' : "")
        //}

        className={clsx(
            "bg-[rgb(32_33_39)] p-6 rounded-xl space-y-4",
            props.className,
            { "border border-yellow-400" : props.isNew}
        )

        }
        >

            <figure className="bg-neutral-50/5 p-3  size-fit rounded-lg text-lg">
                {props.emoji || ":)"}
            </figure>
            <h2 className="font-semibold">{props.feature || 'feature'}</h2>
            <p className=" text-neutral-50/50">{props.description || 'description'}</p>
            {/* Conditionalrendering 
            {props.isNew === true && <p>Esto es nuevo</p>}
            {props.isNew !== true && <p>Esto no es nuevo</p>}
            */}
            {props.isNew? <p>Este es nuevo</p> : <p>Esto no es nuevo</p>}
        </article>
    )
}
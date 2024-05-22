import React from 'react'

const Input = ({ label, placeholder = "Placeholder", className, icon = false, ...props  }) => {
    return (
        <label className="form-control w-full">
            {label && (<div className="label">
                <span className="label-text">{label}</span>
            </div>)}
            {/* <input {...props} type="text" placeholder={placeholder} className={`input input-bordered w-full focus:border-yellow-400 ${className} `} /> */}
            <label {...props} className={`input input-bordered w-full flex items-center gap-2 focus:border-yellow-400 ${className}`}>
                {icon === true && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>}
                <input type="text" className="grow" placeholder={placeholder} />
            </label>
        </label>


    )
}

export default Input
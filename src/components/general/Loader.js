import React from 'react';




const Loader = () => {



    return (
        <>
<div className="hero min-h-screen text-center mx-auto bg-base-100 w-full">
    <div className="hero-content mx-auto text-center w-full">
        <div className="max-w-md mx-auto text-center w-full">
            <div className='mx-auto text-center w-full'>
                <img width="100" src="../../SorkLoader.gif" className='mx-auto' alt="Loading"></img>
            </div>
            <span className="hidden mt-4 loading loading-ring loading-lg"></span>
            <p className='text-center mx-auto'>Fetching your workspaces...</p>
        </div>
    </div>
</div>

        </>
    )
}

export default Loader;


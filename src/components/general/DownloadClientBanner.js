import { useState } from 'react'


export default function DownloadClientBanner() {


    const [isHidden, setHidden] = useState(false);


    return (

<div>
        {!isHidden  && (

        <div
            className="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-primary p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
            <p className="max-w-4xl text-xl leading-6 text-gray-900">
                Download Sork on your machine
            </p>
            <div className="flex flex-none items-center gap-x-5">
                <button
                    type="button"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    Download for MacOS (Silicon)
                </button>
                <button type="button" onClick={() => {
                    setHidden(true)
                }
                } className="text-sm font-semibold leading-6 text-gray-900">
                    Not now
                </button>
            </div>
        </div>
        )}
</div>
    )
}

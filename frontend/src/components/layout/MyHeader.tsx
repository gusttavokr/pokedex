import logoPokemon from '../../assets/Pokemon-Logo.png'

function MyHeader() {
    return (
        <>
            <header className='flex w-full justify-between items-start'>
                <div className='w-full flex items-start gap-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='bg-blue-500 w-25 h-25 rounded-full absolute'></div>
                        <div className='bg-white w-30 h-30 rounded-full'></div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex flex-col items-center justify-center'>
                            {/* <div className='bg-blue-500 w-35 h-35 rounded-full absolute'></div> */}
                            <div className='bg-red-500 w-10 h-10 rounded-full absolute'></div>
                            <div className='bg-red-900 w-15 h-15 rounded-full'></div>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            {/* <div className='bg-blue-500 w-35 h-35 rounded-full absolute'></div> */}
                            <div className='bg-yellow-500 w-10 h-10 rounded-full absolute'></div>
                            <div className='bg-yellow-900 w-15 h-15 rounded-full'></div>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            {/* <div className='bg-blue-500 w-35 h-35 rounded-full absolute'></div> */}
                            <div className='bg-green-500 w-10 h-10 rounded-full absolute'></div>
                            <div className='bg-green-900 w-15 h-15 rounded-full'></div>
                        </div>
                    </div>
                </div>

                <img src={logoPokemon} className='max-w-50'></img>
            </header>
        </>
    )
}

export default MyHeader
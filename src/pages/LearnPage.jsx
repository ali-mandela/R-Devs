/* eslint-disable react/prop-types */

const LearnPage = () => {

    return (
        <div className='w-screen h-screen p-1'>
            <div className='bg-slate-300 p-2 rounded-sm'>
                <h1>Adding interactivity</h1>
                <div className='body flex gap-4'>
                    <ToolBar handlePause={()=>alert('Pause')} handlePlay={()=> alert('playing...')} />
                </div>

            </div>
        </div>
    )
}

function AlertButton({children, onClick}) {
    return (
        <button
            className="bg-green-50 py-2 px-4 rounded-full hover:bg-green-900"
            onClick={onClick}>{children}</button>
    )
}

function ToolBar({handlePlay, handlePause}) {
    return (
        <div className="gap-2 flex">
            <AlertButton onClick={handlePlay}>Play</AlertButton>
            <AlertButton onClick={handlePause}>Pause</AlertButton>

        </div>
    )

}
export default LearnPage
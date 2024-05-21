import { useNavigate } from 'react-router-dom';

function LogIn(){
    const Navigate = useNavigate();

    return <>
        <div className="w-[100dvw] h-[100dvh] flex justify-center bg-[#121212]" >
            <div className='w-[400px] bg-[#202020] my-auto rounded-md'>
                <div className='flex flex-col h-[100%] w-[100%] align-middle text-center p-5'>
                    <span className='text-white text-xl'> WELCOME </span>
                    <div className='mx-auto mt-5'>
                        <input type='text' className='px-4 pt-2 w-[350px] pb-3 bg-[#2B2B2B] focus:border-transparent focus:outline-none text-slate-300' placeholder='username'></input>
                        <input type='password' className='px-4 pt-2 mt-5 w-[350px] pb-3 bg-[#2B2B2B] focus:border-transparent focus:outline-none text-slate-300' placeholder='password'></input>
                        <button onClick={()=>Navigate('home')} className='mb-5 mt-10 bg-[#191919] w-[350px] text-[#4E4E4E] py-2 hover:bg-[#393939] hover:text-[#1a1a1a]'>LOG IN</button>
                        {/* <button onClick={()=>Navigate('home')} className='mb-5 bg-[#191919] w-[350px] text-[#4E4E4E] py-2 hover:bg-[#393939] hover:text-[#1a1a1a]'>GUEST</button> */}
                        <span className='text-[#a0a0a0]'>
                            don't have account ? 
                            <div id='sign up' title='sign up' onClick={()=>Navigate('home')} className='text-[#4E4E4E] hover:text-[#bcbcbc] cursor-pointer'> Sign up</div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default LogIn
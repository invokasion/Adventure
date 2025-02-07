import { useNavigate } from 'react-router-dom';
import userloginAPI from '../../api/loginApi';
import { useState } from 'react';

function LogIn(){
    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = async () => {
        try {
            // Call the API and await its response
            await userloginAPI({ email, password });
            
            // Assuming login was successful, navigate to the home page
            Navigate('/home');
        } catch (error) {
            // Handle error
            setError(error.message);
        }
    };

    return (
        <div className="w-[100dvw] h-[100dvh] flex justify-center bg-[#121212]" >
            <div className='w-[400px] bg-[#202020] my-auto rounded-md'>
                <div className='flex flex-col h-[100%] w-[100%] align-middle text-center p-5'>
                    <span className='text-white text-xl'> WELCOME </span>
                    <div className='mx-auto mt-5'>
                        <input 
                            onChange={(e) => {setEmail(e.target.value); setError('')}} 
                            type='text' 
                            className='px-4 pt-2 w-[350px] pb-3 bg-[#2B2B2B] focus:border-transparent focus:outline-none text-slate-300' 
                            placeholder='email'
                            value={email}
                        />
                        <input 
                            onChange={(e) => {setPassword(e.target.value);setError('')}} 
                            type='password' 
                            className='px-4 pt-2 mt-5 w-[350px] pb-3 bg-[#2B2B2B] focus:border-transparent focus:outline-none text-slate-300' 
                            placeholder='password'
                            value={password}
                        />
                        <button 
                            onClick={login} 
                            className='mb-5 mt-10 bg-[#191919] w-[350px] text-[#4E4E4E] py-2 hover:bg-[#393939] hover:text-[#dcdcdc]'
                        >
                            LOG IN
                        </button>
                        <span className='text-[#a0a0a0]'>
                            don't have account ?
                            <br/>
                            <span
                                id='sign up' 
                                title='sign up' 
                                // onClick={() => Navigate('home')} 
                                className='text-[#4E4E4E] hover:text-[#bcbcbc] cursor-pointer'
                            >
                                Sign up
                            </span>
                        </span>
                        {error ? <p className="text-red-500 pt-2">{error}</p> :  <p className="text-red-500 pt-[32px]"></p>}
                    </div>
                </div>
            </div>
            <script type="text/javascript">
                atOptions = {{
                    'key' : '8d4a8ecf40384def52e40290ed853c59',
                    'format' : 'iframe',
                    'height' : 300,
                    'width' : 160,
                    'params' : {}
                }};
            </script>
            <script type="text/javascript" src="//www.highperformanceformat.com/8d4a8ecf40384def52e40290ed853c59/invoke.js"></script>
        </div>
    );
}

export default LogIn;

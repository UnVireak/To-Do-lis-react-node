import "../../App.css"
import {Button} from "antd"
import { useNavigate } from "react-router-dom";
import TypeWriterEffect from 'react-typewriter-effect';
import {RightOutlined  } from '@ant-design/icons';
const HomePage = ()=>{
    const navigate = useNavigate();
    return(
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ... h-screen  flex">
        <div className="ml-[200px] pt-[350px] w-[600px] font-mono text-cyan-50 text-[25px]">
            <span> Lists can also be fun! Making a list of things to do on a vacation or a night out can help us to get excited about the experience. And making a list of our favorite things can help us to appreciate the good things in life.</span>
    </div>
        <div className="ml-[20px]">
        <h1 className="center font-mono w-[650px] text-fuchsia-50 ml-[35%] pt-[420px] font-bold text-[25px]">List your daily activity here</h1>
    <h1 className="ml-[45%]">
      <span>
     <TypeWriterEffect
     textStyle={{
       fontFamily: 'Fira Code',
       color: '#3F3D56',
       fontWeight: 500,
       fontSize: '20px',
     }}
     startDelay={2000}
     cursorColor="#3F3D56"
     multiText={[
       'hello',
       'Start Now'
     ]}
     multiTextDelay={1000}
     typeSpeed={50}
     multiTextLoop
   />
   </span>
   
   </h1>
   <Button onClick={() => navigate("/ToDoListPage")} className="bg-red-500 ml-[49%]  w-[100px] h-[40px]  text-white font-bold  mr-[280px] py-[6px] rounded hover:bg-red-600 ... "
   >
    <div>Get Start <RightOutlined /></div></Button>
   </div>
   </div>
    )
}

export default HomePage;
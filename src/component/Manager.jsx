import React, { useEffect, useInsertionEffect } from "react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

function Manager() {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  let notify = () => toast("Copied to Clipboard!");

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("eyecross.png")) {
      ref.current.src = "./eye.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "./eyecross.png";
      passwordRef.current.type = "password";
    }
  };

  const savePassword = () => {
    
    if(form.site !=="" && form.password !==""){
    setpasswordArray([...passwordArray, {...form,id:uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]));
    notify = () => toast("Saved Password Sucessfully!");
    notify() 
  }
     else{
      console.log("cant save empty");
     }
    
    setform({ site: "", username: "", password: "" })
  
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  
  const copyText=(text)=> {
    navigator.clipboard.writeText(text)
    notify()
  }

  const editPassword =(e)=>{
console.log("Editing password with id:"+e.id);
setform(passwordArray.filter(item=>item.id ===e.id)[0])
setpasswordArray(passwordArray.filter(item=>item.id !==e.id))
localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id !==e.id)))

  }
  const deletePassword =(id)=>{
    let c =confirm("Want delete password!")
    if(c){
console.log("Deleting password with id:"+id)
setpasswordArray(passwordArray.filter(item=>item.id !==id))
localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id !==id)))
  
notify = () => toast("Deleted Password Sucessfully!");
    notify()}
     }

  return (
    <>
     <ToastContainer/>
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="z-0 absolute bottom-0 left-0 right-0 top-[57px] bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div> */}

      <div className="z-10 md:MyContainer bg-slate-200 w-[70vw] min-h-[541px] mx-auto pt-[25px]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-[20px] text-center font-serif">
          Your own Password Manager
        </p>

        <div className=" flex flex-col p-4 text-black ">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full bg-white border  outline-none border-green-500  w-full p-4 py-1"
            type="text"
            name="site"
            id="site"
            placeholder="Enter Website URL"
          />
          <div className="flex w-full  justify-between mt-[20px]">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full bg-white border  outline-none border-green-500  w-full p-4 py-1 mr-[80px]"
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                className="rounded-full bg-white border  outline-none border-green-500  w-full p-4 py-1"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <span
                className="absolute right-2 top-1 hover:cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-[7px]"
                  width={30}
                  src="./eyecross.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>

          <div
            onClick={savePassword}
            className="AddPass flex items-center text-xl bg-green-800 rounded-full h-[44px] w-[120px] mt-[20px] ml-[30vw] hover:font-bold hover:cursor-pointer"
          >
            <div className="ml-[15px] flex items-center gap-3 hover:font-bold">
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              <button className="  text-xl text-white font-medium hover:font-bold hover:cursor-pointer">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl  ">Your Passwords</h2>
         
            
          {passwordArray.length === 0 && (
            <>
              {" "}
              <table className="table-auto  overflow-hidden rounded-xl ">
                <thead className=" bg-green-800 text-white">
                  <tr>
                    <th className="py-2">Sites URL</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Passwords</th>
                  </tr>
                </thead>
                <div className="font-bold text-center text-white text-4xl pb-[100px] pt-12 ">
                  No Passwords to Show
                </div>{" "}
              </table>{" "}
            </>
          )}
          
           <div className=" h-[33vh] overflow-y-scroll   ">
          {passwordArray.length != 0 && (
            
            <table className="table-auto w-full   rounded-xl h-[30vh] ">
              <thead className=" bg-green-800 text-white">
                <tr>
                  <th className="py-2">Sites URL</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Passwords</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 text-green-900 font-medium">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" py-2 border  border-white text-center w-1/3  ">
                        <div className="flex justify-between items-center">
                          <a
                            className="pl-[20px]"
                            href={item.site}
                            target="_blank"
                          >
                            {item.site}
                          </a>
                          <div className="pr-[30px] hover:cursor-pointer" onClick={()=>copyText(item.site)}>
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="  py-2 flex justify-between border border-white pl-[30px]   ">
                        {item.username}
                        <div className="pr-[30px] cursor-pointer" onClick={()=>copyText(item.username)}>
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "25px",
                              paddingTop: "3px",
                            }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </td>

                      <td className="   py-2 border border-white pl-[30px] ">
                        <div className="flex justify-between">
                          {item.password}
                          <div className="pr-[25px] hover:cursor-pointer" onClick={()=>copyText(item.password)}>
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className="   py-2 border border-white pl-[30px] flex justify-end">
                      
                              
           <span  className="mx-1 cursor-pointer" onClick={()=>editPassword(item)}>                  
                  <lord-icon
                      src="https://cdn.lordicon.com/gwlusjdu.json"
                      trigger="hover"
                      style={{"width":"25px", "height":"25px"}}>
                  </lord-icon>
          </span>
         <span className=" mx-1 pr-5 cursor-pointer" onClick={()=>deletePassword(item.id)}>
                  <lord-icon
                      src="https://cdn.lordicon.com/skkahier.json"
                      trigger="hover"
                      style={{"width":"25px", "height":"25px"}}>
                  </lord-icon>
          </span>
                                          
                      
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
           
          )} </div>
        </div>
      </div>
    </>
  );
}

export default Manager;

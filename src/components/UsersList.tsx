import React,{useEffect,useState} from 'react';
interface User{
    name?:string,
    email?:string
}
const UsersList = ()=>{
    const [data,setData] = useState([] as User[]);
    
    async function getUsers() {
        let url = 'https://jsonplaceholder.typicode.com/users';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        async function renderUsers() {
            let users = await getUsers();
            setData(users)
        }
        renderUsers();
    },[]);

    return (
        <>
        <div>Users</div>
        <ul>
            <>
        {
            data && data.map(ele=>{
                return <>
                    <li>{ele.name}</li>
                    <li>{ele.email}</li>
                </>
            })
        }
        </>
        </ul>
        </>
    )
}
export default UsersList;
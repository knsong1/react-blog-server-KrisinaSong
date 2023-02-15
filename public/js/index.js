document.addEventListener("DOMContentLoaded", getUsers);


async function getUsers() {
    const response = await fetch('/list-users');
    const user = await response.json();
    const userInfo = user[8].userName
           document.getElementsByClassName("profile").innerHTML = `
                <div> 
                 <h3>${userInfo}</h3>
                <p>Sunny: 45 degrees</p>
                </div>
               
        `
    }


    function stringifyFormData(fd) {
        const data = {
            userName: fd.get('userName'), 
            firstName: fd.get('firstName'),
            lastName: fd.get('lastName'),
            email: fd.get('email'),
            password: fd.get('password')

        };
        return JSON.stringify(data);
    }

   const handleUserInfo = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const stringified = stringifyFormData(data);
        const response = await fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: stringified,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                window.location.href="/userspage";
            })
            // .catch((error) => {
            //     console.error('Error:', error);
            // });
            
    };
    
    const form = document.getElementById('add-user');
    form.addEventListener("submit", handleUserInfo)


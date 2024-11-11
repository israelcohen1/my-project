function toggleSignUp() {
    const form = document.querySelector('.signUp') as HTMLFormElement;
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function toggleSignIN() {
    const form = document.querySelector('.signIn') as HTMLFormElement;
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}


async function handleAddUser(ev) {
    ev.preventDefault();
    try {


        const form = ev.target as HTMLFormElement;
        console.log(form);

        const userName = form.name.value;
        const phone = form.phone.value;
        const password = form.password.value;

        const data = {
            userName,
            phone,
            password
        };

        await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
            .then(data => {
                console.log('answer:', data);

                form.reset();
            })
      

    } catch (error) {
        console.error(error);

    }


}
function toggleSignUp(){
const form = document.querySelector('.signUp') as HTMLFormElement;
form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function toggleSignIN(){
    const form = document.querySelector('.signIn') as HTMLFormElement;
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
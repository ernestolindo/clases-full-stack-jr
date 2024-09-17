import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Holis desde main.ts</h1>
  </div>

  <form id='loginForm'>
    <section>
      <label>Nombre de usuario</label>
      <input type='text' id='username' name='name' placeholder='Ingresa tu nombre de usuario'>
    </section>

    <section>
      <label>Password</label>
      <input type='password' id='password' name='password' placeholder='Ingresa tu contraseña'>
    </section>

    <button type='submit'>Iniciar sesión</button>
  </form>
`
// document.querySelector<HTMLDivElement>('#parrafo')!.innerHTML = 'Este es texto desde el p';
const form = document.getElementById('loginForm') as HTMLFormElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();
  console.log('Holiwis');
});

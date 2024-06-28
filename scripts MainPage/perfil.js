function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    
    // Decodificar o token JWT
    const idToken = response.credential;
    const decodedToken = parseJwt(idToken);
    console.log(decodedToken);

    // Verificar se os dados foram decodificados corretamente
    if (decodedToken) {
        // Salvar os dados do usuário no localStorage
        localStorage.setItem('user', JSON.stringify(decodedToken));

        // Atualizar os elementos de perfil
        updateProfile(decodedToken);

        // Atualizar a página
        location.reload();
    } else {
        console.error("Falha ao decodificar o token JWT.");
    }
}

function updateProfile(data) {
    const fullNameElement = document.getElementById('nome');
    const emailElement = document.getElementById('email');
    const pictureElement = document.getElementById('imgProfile');

    if (fullNameElement && emailElement && pictureElement) {
        fullNameElement.textContent = data.name || "Nome não fornecido";
        emailElement.textContent = data.email || "Email não fornecido";
        pictureElement.setAttribute("src", data.picture || "/images/default-profile.jpg");
    } else {
        console.error("Elementos do perfil não encontrados.");
    }
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

window.onload = function () {
    // Verificar se há dados do usuário no localStorage
    const user = localStorage.getItem('user');
    if (user) {
        // Se houver, atualizar o perfil com os dados do usuário
        updateProfile(JSON.parse(user));
    } else {
        // Inicializar o botão de login do Google
        google.accounts.id.initialize({
            client_id: "264720699697-avr42k6pgg860um0j2gd23639fha7k5g.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(document.getElementById("googleButton"), {
            theme: "filled_blue",
            size: "medium",
            shape: "pill"
        });

        google.accounts.id.prompt();
    }

    // Atualizar imagem de perfil
    document.querySelector("#input-file").addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            localStorage.setItem("imgProfile", reader.result);
            document.querySelector("#imgProfile").setAttribute("src", reader.result);
        });
        reader.readAsDataURL(this.files[0]);
    });

    // Carregar nova imagem de perfil ao carregar a página
    document.addEventListener("DOMContentLoaded", () => {
        const newProfilePic = localStorage.getItem("imgProfile");
        if (newProfilePic) {
            document.querySelector("#imgProfile").setAttribute("src", newProfilePic);
        }
    });
};

function logout() {
    // Limpar dados do localStorage
    localStorage.removeItem('user');

    // Redirecionar para a página de login do Google
    const auth2 = google.accounts.id.getAuthInstance();
    if (auth2) {
        auth2.signOut().then(function () {
            console.log('Usuário deslogado.');
            // Atualizar a página após o logout
            location.reload();
        });
    }
}

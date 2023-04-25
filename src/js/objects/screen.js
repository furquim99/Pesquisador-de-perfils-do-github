const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info section">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                        </div>
                                        <div class="numbersF">
                                            <div class="seguidores">
                                                <h4> Seguidores</h4>
                                                <span>${user.seguidores}</span>
                                            </div>
                                            <div class="seguindo">
                                                <h4> Seguindo</h4>
                                                <span>${user.seguindo}</span>
                                            </div>
                                        </div>
                                        
                                    </div>`                                                   
        if(user.repositories.length > 0){
            let repositoriesItens = ''
            user.repositories.forEach(repo => 
                
                repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">
                    <h4>${repo.name}</h4>
                        <div>
                            <i class="forks">🍴 ${repo.forks_count}</i>
                            <i class="stars">⭐ ${repo.stargazers_count}</i>
                            <i class="watchers">👀 ${repo.watchers_count}</i>
                            <i class="language">👩‍💻 ${repo.language ?? 'Sem linguagem'}</i>
                        </div>
                </a></li>`)  
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul class="ir">${repositoriesItens}</ul>
                                           </div>` 
        }
        let eventsListItens = ""
        user.events.forEach(event =>{
            let commitMessage = ''
            if(event.payload.commits === undefined){
                commitMessage = "event sem commits"
            }else{
                commitMessage = event.payload.commits[0].message
            }
            
            //console.log(commitMessage, 'mensagem')
            eventsListItens += `<li><strong>${event.repo.name}: </strong> - ${commitMessage}</li>`
        })
        if(user.events.length > 0){
            if(user.events.type === "PushEvent" || "CreateEvent"){
                this.userProfile.innerHTML += `
                                            <div class="eventos section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsListItens}</ul>
                                            </div>
            `
            }
            } else if(user.events.length === 0) {
                this.userProfile.innerHTML += `
                                            <div class="eventos section">
                                                <h2>Eventos</h2>
                                                <ul>Nao possui atualizações recentemente</ul>
                                            </div>
            `
            }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado, digite o nome corretamente</h3>"
    }
}

export { screen }

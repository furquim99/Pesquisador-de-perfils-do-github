const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    seguindo: 0,
    seguidores: 0,
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.seguindo = gitHubUser.following
        this.seguidores = gitHubUser.followers
        
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        this.events = events
    }
}

export { user }
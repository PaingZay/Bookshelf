class AuthorModel {
    id: number;
    name: string;
    authorType: number;
    profile: string;
    
    constructor(id: number, name: string, authorType: number, profile: string) {
        this.id = id;
        this.name = name;
        this.authorType = authorType;
        this.profile = profile;
    }
}

export default AuthorModel;
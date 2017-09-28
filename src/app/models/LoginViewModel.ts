export class LoginVM {
    constructor(
        public username: string,
        public password: string
    ) {

    }

    static fromJson(json: any): LoginVM {
        return new LoginVM(
            json.username,
            json.password
        );
    }

} // end LoginVM
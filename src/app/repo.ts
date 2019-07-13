export class Repo {
  constructor (
    public login: string,
    public public_repos: number,
    public followers: number,
    public following: number
  ) {}
}

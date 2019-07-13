export class Users {
  constructor (
      public login: string,
      public html_url: string,
      public name: string,
      public public_repos: number,
      public followers: number,
      public public_gists: number,
      public following: number) {}
}

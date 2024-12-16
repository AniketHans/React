import envVariables from "../env-import/envImport";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(envVariables.appwriteURL)
      .setProject(envVariables.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (e) {
      console.error(e);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (e) {
      console.error(e);
    }
  }

  async getCurrentUser() {
    //We are creating this method to check if the user is a logged in user or logged out user.
    try {
      return await this.account.get();
    } catch (e) {
      console.error(e);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (e) {
      console.error(e);
    }
  }
}

const authService = new AuthService();

export default authService;

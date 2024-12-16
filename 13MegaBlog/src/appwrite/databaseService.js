//We are creating this file to accomodate the basic functionalities like CRUD operations with database
import envVariables from "../env-import/envImport";

import { Client, Databases, ID, Storage, Query } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(envVariables.appwriteURL)
      .setProject(envVariables.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        envVariables.appwriteDatabaseId,
        envVariables.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (e) {
      console.error(e);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userID }) {
    try {
      return await this.databases.updateDocument(
        envVariables.appwriteDatabaseId,
        envVariables.appwriteCollectionId,
        slug,
        { title, content, userID, featuredImage, status }
      );
    } catch (e) {
      console.error(e);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        envVariables.appwriteDatabaseId,
        envVariables.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        envVariables.appwriteDatabaseId,
        envVariables.appwriteCollectionId,
        slug
      );
    } catch (e) {
      console.error(e);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    //In Appwrite, the queries can only be applied on fields for which we have created indexes.
    try {
      return this.databases.listDocuments(
        envVariables.appwriteDatabaseId,
        envVariables.appwriteCollectionId,
        queries
      );
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  //file upload
  async uploadFile(file) {
    try {
      return await this.buckets.createFile(
        envVariables.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.bucket.deleteFile(envVariables.appwriteBucketId, fileID);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  getFilePreview(fileID) {
    //This is a pretty fast method so we dont have to use async await with it.
    return this.bucket.getFilePreview(envVariables.appwriteBucketId, fileID);
  }
}

const db = new DatabaseService();

export default db;

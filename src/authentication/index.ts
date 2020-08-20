import * as express from "express";
import * as jwt from "jsonwebtoken";
import Unauthorized from "@errors/Unauthorized";

const SECRET = "M9SJHDOLS";

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  if (securityName === "jwt") {
    const token =
      request.body.token ||
      request.query.token ||
      request.headers["x-access-token"] ||
      request.headers.authorization;

    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Unauthorized());
      }
      jwt.verify(token, SECRET, (err: any, decoded: any) => {
        if (err) {
          reject(new Unauthorized());
        } else {
          if (scopes) {
            if (scopes.includes(decoded.scope)) {
              resolve(decoded);
              return;
            } else {
              reject(new Unauthorized());
              return;
            }
          } else {
            resolve(decoded);
            return;
          }
        }
      });
    });
  } else throw new Unauthorized();
}

/* tslint:disable */
/* eslint-disable */
/**
 * BIND ICO portal API
 * Description for BIND. 
 *
 * OpenAPI spec version: 2.0
 * Contact: support@bind.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface BaseUser
 */
export interface BaseUser {
    /**
     * 
     * @type {string}
     * @memberof BaseUser
     */
    user_id: string;
    /**
     * 
     * @type {string}
     * @memberof BaseUser
     */
    first_name: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaseUser
     */
    last_name: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaseUser
     */
    middle_name: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaseUser
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BaseUser
     */
    birthdate?: string | null;
}
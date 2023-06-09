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
import { User } from './user';
/**
 * 
 * @export
 * @interface Invitation
 */
export interface Invitation {
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    invitation_id?: string;
    /**
     * 
     * @type {User}
     * @memberof Invitation
     */
    user?: User;
    /**
     * 
     * @type {User}
     * @memberof Invitation
     */
    friend?: User;
    /**
     * 
     * @type {Date}
     * @memberof Invitation
     */
    created_at?: Date;
}

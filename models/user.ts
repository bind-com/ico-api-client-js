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
import { Country } from './country';
import { Currency } from './currency';
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    user_id: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    first_name: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    last_name: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    middle_name: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    birthdate?: string | null;
    /**
     * Referral code that was generated by this User. This code can be used to give it to another users
     * @type {string}
     * @memberof User
     */
    generated_referral_code: string | null;
    /**
     * Referral code that was used by this User during registration
     * @type {string}
     * @memberof User
     */
    registration_referral_code: string | null;
    /**
     * 
     * @type {Currency}
     * @memberof User
     */
    ico_interface_currency?: Currency;
    /**
     * 
     * @type {Country}
     * @memberof User
     */
    country?: Country;
}

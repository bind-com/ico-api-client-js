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
 * @interface BonusTransaction
 */
export interface BonusTransaction {
    /**
     * 
     * @type {string}
     * @memberof BonusTransaction
     */
    id: string;
    /**
     * Email of a user. Can become name+last name later
     * @type {string}
     * @memberof BonusTransaction
     */
    user_credentials: string;
    /**
     * Amount of tokens that can be acquired from this transaction
     * @type {number}
     * @memberof BonusTransaction
     */
    token_amount: number;
    /**
     * Amount of stablecoins that can be acquired from this transaction
     * @type {number}
     * @memberof BonusTransaction
     */
    stablecoin_amount: number;
    /**
     * 
     * @type {Date}
     * @memberof BonusTransaction
     */
    datetime_created: Date;
}

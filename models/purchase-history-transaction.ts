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
 * @interface PurchaseHistoryTransaction
 */
export interface PurchaseHistoryTransaction {
    /**
     * 
     * @type {string}
     * @memberof PurchaseHistoryTransaction
     */
    id: string;
    /**
     * Amount of tokens that can be acquired from this transaction
     * @type {number}
     * @memberof PurchaseHistoryTransaction
     */
    token_amount: number;
    /**
     * Amount of stablecoins that can be acquired from this transaction
     * @type {number}
     * @memberof PurchaseHistoryTransaction
     */
    fiat_amount: number;
    /**
     * 
     * @type {Date}
     * @memberof PurchaseHistoryTransaction
     */
    datetime_created: Date;
}

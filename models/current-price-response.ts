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
import { Currency } from './currency';
/**
 * 
 * @export
 * @interface CurrentPriceResponse
 */
export interface CurrentPriceResponse {
    /**
     * current price of a BIND token
     * @type {number}
     * @memberof CurrentPriceResponse
     */
    price: number;
    /**
     * 
     * @type {Currency}
     * @memberof CurrentPriceResponse
     */
    price_currency: Currency;
}
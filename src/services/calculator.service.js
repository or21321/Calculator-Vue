import { httpService } from "./http.service";

const ENDPOINT = 'calculator'

export const calculatorService = {
    queryExpressionRes
}

async function queryExpressionRes(expression) {
    console.log('queryExpressionRes', expression);
    const res = await httpService.get(ENDPOINT, expression)
    console.log('res', res);
    return res
}
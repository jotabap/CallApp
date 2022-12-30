import { enviroment } from "src/environments/environment"

const UrlService={
    UrlClient:enviroment.apiUrl+'/api/Clientes'
}
export const UrlMstClientes={
    listClient:UrlService.UrlClient+'/GetByCedula'
}
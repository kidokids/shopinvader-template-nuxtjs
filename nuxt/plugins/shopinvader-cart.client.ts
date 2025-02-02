import { SaleService } from './../services/SaleService'
import { AddressService, CartService, SettingService } from '../services'

export default defineNuxtPlugin((nuxtApp) => {
  const auth = nuxtApp?.$auth
  const shopinvader = nuxtApp?.$shopinvader
  const { providers, services } = shopinvader

  auth.onUserLoaded(() => {
    let settings,
      cart,
      sales,
      addresses = null
    if (shopinvader?.services?.settings === null) {
      if (providers?.erp != undefined) {
        settings = new SettingService(providers.erp)
        settings.init()
      }
    }
    if (shopinvader?.services?.sales === null) {
      if (providers?.erp != undefined) {
        sales = new SaleService(providers.erp)
      }
    }
    if (shopinvader?.services?.cart === null) {
      if (providers?.erp != undefined || services?.products !== undefined) {
        cart = new CartService(providers?.erp, services?.products)
      }
    }
    if (shopinvader?.services?.addresses === null) {
      if (providers?.erp != undefined) {
        addresses = new AddressService(providers?.erp, settings?.options)
      }
    }
    shopinvader.services = {
      ...shopinvader.services,
      ...{
        settings,
        sales,
        cart,
        addresses
      }
    }
  })
})

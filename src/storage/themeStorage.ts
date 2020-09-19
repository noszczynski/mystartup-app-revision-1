const ITEM_NAME = 'theme'

export default {
  set: (value: string): void => localStorage.setItem(ITEM_NAME, value),
  get: ():string | undefined | null => localStorage.getItem(ITEM_NAME),
  clear: ():void => localStorage.removeItem(ITEM_NAME)
}

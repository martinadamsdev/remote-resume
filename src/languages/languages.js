import zhCN from './zh_CN'
import enUS from './en_US'

const languages = {
  zh_CN: zhCN,
  en_US: enUS,
  setLanguage (language, array) {
    array.map((val, index, array) => {
      val = this[language][val]
      array[index] = val
    })
    console.log(array)
  }
}

export default languages

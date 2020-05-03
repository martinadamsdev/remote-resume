const puppeteer = require('puppeteer')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(cors({
  origin: '*'
}))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/', (req, res, next) => {
  (async () => {
    // 启动浏览器
    const browser = await puppeteer.launch({
      // 无界面 默认为true,改成false,则可以看到浏览器操作，目前生成pdf只支持无界面的操作。
      // headless: false,
      // 开启开发者调试模式，默认false, 也就是平时F12打开的面版
      // devtools: true,
    })
    // 打开一个标签页
    const page = await browser.newPage()
    // 跳转到页面 http://huziketang.mangojuice.top/books/react/
    await page.goto('http://localhost:8080', {
      waitUntil: 'networkidle2'
    })
    // const html = await page.$eval('.tui-editor-contents', element => element.innerHTML);
    const html = await page.evaluate(() => document.querySelector('.te-preview').innerHTML);
    console.log(html)
    const result = "<!DOCTYPE html>\n" +
      "<html lang=\"en\">\n" +
      "<head>\n" +
      "    <meta charset=\"UTF-8\">\n" +
      "    <title>Title</title>\n" +
      "</head>\n" +
      "<body>" + html +  "</body></html>"
    console.log(result)
    await page.setContent(result)
    // path 路径， format 生成pdf页面格式
    await page.pdf({
      path: 'react.pdf',
      format: 'A4'
    })
    // 关闭浏览器
    await browser.close()
  })()

  res.send({
    "code": "200",
    "file": "/api/react.pdf"
  })
})

app.listen(3000)

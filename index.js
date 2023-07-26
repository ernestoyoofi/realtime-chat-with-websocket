const fs = require("fs") // File System
const ws = require("ws") // WebSocket
const express = require("express") // Express.js / Server

// ✨ Catatan Informasi
// Configurasi Terlebih dahulu sebelum menjalankan
// Pastikan file store sudah berisi array !
const saveStore = `${process.cwd()}/store.json` // Lokasi penyimpanan pesan
const port = process.env.PORT || 3456 // Port (optional/tidak selalu)

// Membuat lokasi untuk server
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/index.html`)
})
app.get("/called", (req, res) => {
  res.send("OK")
})
const serverSocket = app.listen(port, () => {
  console.log(`Server Running... http://localhost:${port}`)
})
// Koneksikan websocket dengan http
const socket = new ws.Server({ noServer: true })
serverSocket.on("upgrade", (req, sock, head) => {
  socket.handleUpgrade(req, sock, head, (ws) => {
    socket.emit("connection", ws, req)
  })
})
// Fungsi penyimpana pesan
function LoadAllChat() {
  const data = JSON.parse(fs.readFileSync(saveStore, "utf-8"))
  return data
}
function SaveMessage(chat) {
  const data = LoadAllChat()
  data.push(chat)
  fs.writeFileSync(saveStore, JSON.stringify(data), "utf-8")
}
// WebSocket Event
socket.on("connection", (evsoc, req) => {
  const LoadAllStoreMessage = LoadAllChat()
  for(let i in [...Array(Math.floor(LoadAllStoreMessage.length / 20)+1)]) {
    const start = Number(i)*20
    evsoc.send(JSON.stringify({
      type: "chat.load",
      msg: LoadAllStoreMessage.slice(start, start+20)
    }))
  }
  evsoc.on("message", (data) => {
    try {
      const jsd = JSON.parse(data.toString())
      if(jsd.type === "typeit" && jsd.uuid) {
        socket.clients.forEach(z => {
          z.send(JSON.stringify({
            type: "chat.typeing",
            uuid: jsd.uuid
          }))
        })
      }
      if(jsd.type === "send" && jsd.uuid && jsd.text && jsd.time && jsd.text.length < 200) {
        const dataMessage = {
          type: "chat.reciver",
          msg: [{
            user: jsd.uuid,
            time: jsd.time,
            text: jsd.text,
            reply: jsd.reply
          }]
        }
        SaveMessage(dataMessage.msg[0])
        socket.clients.forEach(z => {
          z.send(JSON.stringify(dataMessage))
        })
      }
    } catch(err) {
      // Something Error
    }
  })
})
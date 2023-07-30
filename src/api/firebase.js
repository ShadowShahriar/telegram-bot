import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

const headersRTDB = { 'Content-Type': 'application/json' }
const { FIREBASE_RTDB_AUTH, FIREBASE_RTDB_NAME, FIREBASE_STORAGE_BUCKET } = process.env

const urlSTORAGE = (parent, file, download) =>
	`https://firebasestorage.googleapis.com/v0/b/` +
	`${FIREBASE_STORAGE_BUCKET}/o/${parent}%2F${file}` +
	(download ? '?alt=media' : '')

const urlRTDB = file => `https://${FIREBASE_RTDB_NAME}.firebaseio.com/${file}.json?auth=${FIREBASE_RTDB_AUTH}`

const readRTDB = async file => {
	const data = await fetch(urlRTDB(file), {
		method: 'GET',
		headers: headersRTDB
	})
	const response = await data.json()
	return response
}

const writeRTDB = async (file, data = {}, update = false) => {
	const request = await fetch(urlRTDB(file), {
		method: update ? 'PATCH' : 'PUT',
		headers: headersRTDB,
		body: JSON.stringify(data)
	})
	const response = await request.json()
	return response
}

const readRecord = async query => {
	const records = await readRTDB('records')
	if (records && query in records) return records[query]
	return []
}

const writeRecord = async (query, data) => {
	const records = await writeRTDB(
		'records',
		{
			[query]: data
		},
		true
	)
	return records
}

const getStorageURL = (parent, file) => urlSTORAGE(parent, file, true)

export { readRTDB, writeRTDB, readRecord, writeRecord, getStorageURL }

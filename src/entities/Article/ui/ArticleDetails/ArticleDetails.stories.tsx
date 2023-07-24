import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { type Article, ArticleBlockType, ArticleType } from '../../model/types/article'

export default {
	title: 'entities/ArticleDetails',
	component: ArticleDetails
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />

const article: Article = {
	id: "1",
	title: "Javascript news",
	user: {
		id: '1',
		username: 'Tipaga',
		avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png'
	},
	subtitle: "Р§С‚Рѕ РЅРѕРІРѕРіРѕ РІ JS Р·Р° 2022 РіРѕРґ?",
	img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
	views: 1022,
	createdAt: "26.02.2022",
	type: [
		ArticleType.IT
	],
	blocks: [
		{
			id: "1",
			type: ArticleBlockType.TEXT,
			title: "Р—Р°РіРѕР»РѕРІРѕРє СЌС‚РѕРіРѕ Р±Р»РѕРєР°",
			paragraphs: [
				"РџСЂРѕРіСЂР°РјРјР°, РєРѕС‚РѕСЂСѓСЋ РїРѕ С‚СЂР°РґРёС†РёРё РЅР°Р·С‹РІР°СЋС‚ В«Hello, world!В», РѕС‡РµРЅСЊ РїСЂРѕСЃС‚Р°. РћРЅР° РІС‹РІРѕРґРёС‚ РєСѓРґР°-Р»РёР±Рѕ С„СЂР°Р·Сѓ В«Hello, world!В», РёР»Рё РґСЂСѓРіСѓСЋ РїРѕРґРѕР±РЅСѓСЋ, СЃСЂРµРґСЃС‚РІР°РјРё РЅРµРєРѕРµРіРѕ СЏР·С‹РєР°.",
				"JavaScript вЂ” СЌС‚Рѕ СЏР·С‹Рє, РїСЂРѕРіСЂР°РјРјС‹ РЅР° РєРѕС‚РѕСЂРѕРј РјРѕР¶РЅРѕ РІС‹РїРѕР»РЅСЏС‚СЊ РІ СЂР°Р·РЅС‹С… СЃСЂРµРґР°С…. Р’ РЅР°С€РµРј СЃР»СѓС‡Р°Рµ СЂРµС‡СЊ РёРґС‘С‚ Рѕ Р±СЂР°СѓР·РµСЂР°С… Рё Рѕ СЃРµСЂРІРµСЂРЅРѕР№ РїР»Р°С‚С„РѕСЂРјРµ Node.js. Р•СЃР»Рё РґРѕ СЃРёС… РїРѕСЂ РІС‹ РЅРµ РЅР°РїРёСЃР°Р»Рё РЅРё СЃС‚СЂРѕС‡РєРё РєРѕРґР° РЅР° JS Рё С‡РёС‚Р°РµС‚Рµ СЌС‚РѕС‚ С‚РµРєСЃС‚ РІ Р±СЂР°СѓР·РµСЂРµ, РЅР° РЅР°СЃС‚РѕР»СЊРЅРѕРј РєРѕРјРїСЊСЋС‚РµСЂРµ, СЌС‚Рѕ Р·РЅР°С‡РёС‚, С‡С‚Рѕ РІС‹ Р±СѓРєРІР°Р»СЊРЅРѕ РІ СЃС‡РёС‚Р°РЅРЅС‹С… СЃРµРєСѓРЅРґР°С… РѕС‚ СЃРІРѕРµР№ РїРµСЂРІРѕР№ JavaScript-РїСЂРѕРіСЂР°РјРјС‹.",
				"РЎСѓС‰РµСЃС‚РІСѓСЋС‚ Рё РґСЂСѓРіРёРµ СЃРїРѕСЃРѕР±С‹ Р·Р°РїСѓСЃРєР° JS-РєРѕРґР° РІ Р±СЂР°СѓР·РµСЂРµ. РўР°Рє, РµСЃР»Рё РіРѕРІРѕСЂРёС‚СЊ РѕР± РѕР±С‹С‡РЅРѕРј РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРё РїСЂРѕРіСЂР°РјРј РЅР° JavaScript, РѕРЅРё Р·Р°РіСЂСѓР¶Р°СЋС‚СЃСЏ РІ Р±СЂР°СѓР·РµСЂ РґР»СЏ РѕР±РµСЃРїРµС‡РµРЅРёСЏ СЂР°Р±РѕС‚С‹ РІРµР±-СЃС‚СЂР°РЅРёС†. РљР°Рє РїСЂР°РІРёР»Рѕ, РєРѕРґ РѕС„РѕСЂРјР»СЏСЋС‚ РІ РІРёРґРµ РѕС‚РґРµР»СЊРЅС‹С… С„Р°Р№Р»РѕРІ СЃ СЂР°СЃС€РёСЂРµРЅРёРµРј .js, РєРѕС‚РѕСЂС‹Рµ РїРѕРґРєР»СЋС‡Р°СЋС‚ Рє РІРµР±-СЃС‚СЂР°РЅРёС†Р°Рј, РЅРѕ РїСЂРѕРіСЂР°РјРјРЅС‹Р№ РєРѕРґ РјРѕР¶РЅРѕ РІРєР»СЋС‡Р°С‚СЊ Рё РЅРµРїРѕСЃСЂРµРґСЃС‚РІРµРЅРЅРѕ РІ РєРѕРґ СЃС‚СЂР°РЅРёС†С‹. Р’СЃС‘ СЌС‚Рѕ РґРµР»Р°РµС‚СЃСЏ СЃ РїРѕРјРѕС‰СЊСЋ С‚РµРіР° <script>. РљРѕРіРґР° Р±СЂР°СѓР·РµСЂ РѕР±РЅР°СЂСѓР¶РёРІР°РµС‚ С‚Р°РєРѕР№ РєРѕРґ, РѕРЅ РІС‹РїРѕР»РЅСЏРµС‚ РµРіРѕ. РџРѕРґСЂРѕР±РЅРѕСЃС‚Рё Рѕ С‚РµРіРµ script РјРѕР¶РЅРѕ РїРѕСЃРјРѕС‚СЂРµС‚СЊ РЅР° СЃР°Р№С‚Рµ w3school.com. Р’ С‡Р°СЃС‚РЅРѕСЃС‚Рё, СЂР°СЃСЃРјРѕС‚СЂРёРј РїСЂРёРјРµСЂ, РґРµРјРѕРЅСЃС‚СЂРёСЂСѓСЋС‰РёР№ СЂР°Р±РѕС‚Сѓ СЃ РІРµР±-СЃС‚СЂР°РЅРёС†РµР№ СЃСЂРµРґСЃС‚РІР°РјРё JavaScript, РїСЂРёРІРµРґС‘РЅРЅС‹Р№ РЅР° СЌС‚РѕРј СЂРµСЃСѓСЂСЃРµ. Р­С‚РѕС‚ РїСЂРёРјРµСЂ РјРѕР¶РЅРѕ Р·Р°РїСѓСЃС‚РёС‚СЊ Рё СЃСЂРµРґСЃС‚РІР°РјРё РґР°РЅРЅРѕРіРѕ СЂРµСЃСѓСЂСЃР° (РёС‰РёС‚Рµ РєРЅРѕРїРєСѓ Try it Yourself), РЅРѕ РјС‹ РїРѕСЃС‚СѓРїРёРј РЅРµРјРЅРѕРіРѕ РёРЅР°С‡Рµ. Рђ РёРјРµРЅРЅРѕ, СЃРѕР·РґР°РґРёРј РІ РєР°РєРѕРј-РЅРёР±СѓРґСЊ С‚РµРєСЃС‚РѕРІРѕРј СЂРµРґР°РєС‚РѕСЂРµ (РЅР°РїСЂРёРјРµСЂ вЂ” РІ VS Code РёР»Рё РІ Notepad++) РЅРѕРІС‹Р№ С„Р°Р№Р», РєРѕС‚РѕСЂС‹Р№ РЅР°Р·РѕРІС‘Рј hello.html, Рё РґРѕР±Р°РІРёРј РІ РЅРµРіРѕ СЃР»РµРґСѓСЋС‰РёР№ РєРѕРґ:"
			]
		},
		{
			id: "4",
			type: ArticleBlockType.CODE,
			code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
		},
		{
			id: "5",
			type: ArticleBlockType.TEXT,
			title: "Р—Р°РіРѕР»РѕРІРѕРє СЌС‚РѕРіРѕ Р±Р»РѕРєР°",
			paragraphs: [
				"РџСЂРѕРіСЂР°РјРјР°, РєРѕС‚РѕСЂСѓСЋ РїРѕ С‚СЂР°РґРёС†РёРё РЅР°Р·С‹РІР°СЋС‚ В«Hello, world!В», РѕС‡РµРЅСЊ РїСЂРѕСЃС‚Р°. РћРЅР° РІС‹РІРѕРґРёС‚ РєСѓРґР°-Р»РёР±Рѕ С„СЂР°Р·Сѓ В«Hello, world!В», РёР»Рё РґСЂСѓРіСѓСЋ РїРѕРґРѕР±РЅСѓСЋ, СЃСЂРµРґСЃС‚РІР°РјРё РЅРµРєРѕРµРіРѕ СЏР·С‹РєР°.",
				"РЎСѓС‰РµСЃС‚РІСѓСЋС‚ Рё РґСЂСѓРіРёРµ СЃРїРѕСЃРѕР±С‹ Р·Р°РїСѓСЃРєР° JS-РєРѕРґР° РІ Р±СЂР°СѓР·РµСЂРµ. РўР°Рє, РµСЃР»Рё РіРѕРІРѕСЂРёС‚СЊ РѕР± РѕР±С‹С‡РЅРѕРј РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРё РїСЂРѕРіСЂР°РјРј РЅР° JavaScript, РѕРЅРё Р·Р°РіСЂСѓР¶Р°СЋС‚СЃСЏ РІ Р±СЂР°СѓР·РµСЂ РґР»СЏ РѕР±РµСЃРїРµС‡РµРЅРёСЏ СЂР°Р±РѕС‚С‹ РІРµР±-СЃС‚СЂР°РЅРёС†. РљР°Рє РїСЂР°РІРёР»Рѕ, РєРѕРґ РѕС„РѕСЂРјР»СЏСЋС‚ РІ РІРёРґРµ РѕС‚РґРµР»СЊРЅС‹С… С„Р°Р№Р»РѕРІ СЃ СЂР°СЃС€РёСЂРµРЅРёРµРј .js, РєРѕС‚РѕСЂС‹Рµ РїРѕРґРєР»СЋС‡Р°СЋС‚ Рє РІРµР±-СЃС‚СЂР°РЅРёС†Р°Рј, РЅРѕ РїСЂРѕРіСЂР°РјРјРЅС‹Р№ РєРѕРґ РјРѕР¶РЅРѕ РІРєР»СЋС‡Р°С‚СЊ Рё РЅРµРїРѕСЃСЂРµРґСЃС‚РІРµРЅРЅРѕ РІ РєРѕРґ СЃС‚СЂР°РЅРёС†С‹. Р’СЃС‘ СЌС‚Рѕ РґРµР»Р°РµС‚СЃСЏ СЃ РїРѕРјРѕС‰СЊСЋ С‚РµРіР° <script>. РљРѕРіРґР° Р±СЂР°СѓР·РµСЂ РѕР±РЅР°СЂСѓР¶РёРІР°РµС‚ С‚Р°РєРѕР№ РєРѕРґ, РѕРЅ РІС‹РїРѕР»РЅСЏРµС‚ РµРіРѕ. РџРѕРґСЂРѕР±РЅРѕСЃС‚Рё Рѕ С‚РµРіРµ script РјРѕР¶РЅРѕ РїРѕСЃРјРѕС‚СЂРµС‚СЊ РЅР° СЃР°Р№С‚Рµ w3school.com. Р’ С‡Р°СЃС‚РЅРѕСЃС‚Рё, СЂР°СЃСЃРјРѕС‚СЂРёРј РїСЂРёРјРµСЂ, РґРµРјРѕРЅСЃС‚СЂРёСЂСѓСЋС‰РёР№ СЂР°Р±РѕС‚Сѓ СЃ РІРµР±-СЃС‚СЂР°РЅРёС†РµР№ СЃСЂРµРґСЃС‚РІР°РјРё JavaScript, РїСЂРёРІРµРґС‘РЅРЅС‹Р№ РЅР° СЌС‚РѕРј СЂРµСЃСѓСЂСЃРµ. Р­С‚РѕС‚ РїСЂРёРјРµСЂ РјРѕР¶РЅРѕ Р·Р°РїСѓСЃС‚РёС‚СЊ Рё СЃСЂРµРґСЃС‚РІР°РјРё РґР°РЅРЅРѕРіРѕ СЂРµСЃСѓСЂСЃР° (РёС‰РёС‚Рµ РєРЅРѕРїРєСѓ Try it Yourself), РЅРѕ РјС‹ РїРѕСЃС‚СѓРїРёРј РЅРµРјРЅРѕРіРѕ РёРЅР°С‡Рµ. Рђ РёРјРµРЅРЅРѕ, СЃРѕР·РґР°РґРёРј РІ РєР°РєРѕРј-РЅРёР±СѓРґСЊ С‚РµРєСЃС‚РѕРІРѕРј СЂРµРґР°РєС‚РѕСЂРµ (РЅР°РїСЂРёРјРµСЂ вЂ” РІ VS Code РёР»Рё РІ Notepad++) РЅРѕРІС‹Р№ С„Р°Р№Р», РєРѕС‚РѕСЂС‹Р№ РЅР°Р·РѕРІС‘Рј hello.html, Рё РґРѕР±Р°РІРёРј РІ РЅРµРіРѕ СЃР»РµРґСѓСЋС‰РёР№ РєРѕРґ:"
			]
		},
		{
			id: "2",
			type: ArticleBlockType.IMAGE,
			src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
			title: "Р РёСЃСѓРЅРѕРє 1 - СЃРєСЂРёРЅС€РѕС‚ СЃР°Р№С‚Р°"
		},
		{
			id: "3",
			type: ArticleBlockType.CODE,
			code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
		},
		{
			id: "7",
			type: ArticleBlockType.TEXT,
			title: "Р—Р°РіРѕР»РѕРІРѕРє СЌС‚РѕРіРѕ Р±Р»РѕРєР°",
			paragraphs: [
				"JavaScript вЂ” СЌС‚Рѕ СЏР·С‹Рє, РїСЂРѕРіСЂР°РјРјС‹ РЅР° РєРѕС‚РѕСЂРѕРј РјРѕР¶РЅРѕ РІС‹РїРѕР»РЅСЏС‚СЊ РІ СЂР°Р·РЅС‹С… СЃСЂРµРґР°С…. Р’ РЅР°С€РµРј СЃР»СѓС‡Р°Рµ СЂРµС‡СЊ РёРґС‘С‚ Рѕ Р±СЂР°СѓР·РµСЂР°С… Рё Рѕ СЃРµСЂРІРµСЂРЅРѕР№ РїР»Р°С‚С„РѕСЂРјРµ Node.js. Р•СЃР»Рё РґРѕ СЃРёС… РїРѕСЂ РІС‹ РЅРµ РЅР°РїРёСЃР°Р»Рё РЅРё СЃС‚СЂРѕС‡РєРё РєРѕРґР° РЅР° JS Рё С‡РёС‚Р°РµС‚Рµ СЌС‚РѕС‚ С‚РµРєСЃС‚ РІ Р±СЂР°СѓР·РµСЂРµ, РЅР° РЅР°СЃС‚РѕР»СЊРЅРѕРј РєРѕРјРїСЊСЋС‚РµСЂРµ, СЌС‚Рѕ Р·РЅР°С‡РёС‚, С‡С‚Рѕ РІС‹ Р±СѓРєРІР°Р»СЊРЅРѕ РІ СЃС‡РёС‚Р°РЅРЅС‹С… СЃРµРєСѓРЅРґР°С… РѕС‚ СЃРІРѕРµР№ РїРµСЂРІРѕР№ JavaScript-РїСЂРѕРіСЂР°РјРјС‹.",
				"РЎСѓС‰РµСЃС‚РІСѓСЋС‚ Рё РґСЂСѓРіРёРµ СЃРїРѕСЃРѕР±С‹ Р·Р°РїСѓСЃРєР° JS-РєРѕРґР° РІ Р±СЂР°СѓР·РµСЂРµ. РўР°Рє, РµСЃР»Рё РіРѕРІРѕСЂРёС‚СЊ РѕР± РѕР±С‹С‡РЅРѕРј РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРё РїСЂРѕРіСЂР°РјРј РЅР° JavaScript, РѕРЅРё Р·Р°РіСЂСѓР¶Р°СЋС‚СЃСЏ РІ Р±СЂР°СѓР·РµСЂ РґР»СЏ РѕР±РµСЃРїРµС‡РµРЅРёСЏ СЂР°Р±РѕС‚С‹ РІРµР±-СЃС‚СЂР°РЅРёС†. РљР°Рє РїСЂР°РІРёР»Рѕ, РєРѕРґ РѕС„РѕСЂРјР»СЏСЋС‚ РІ РІРёРґРµ РѕС‚РґРµР»СЊРЅС‹С… С„Р°Р№Р»РѕРІ СЃ СЂР°СЃС€РёСЂРµРЅРёРµРј .js, РєРѕС‚РѕСЂС‹Рµ РїРѕРґРєР»СЋС‡Р°СЋС‚ Рє РІРµР±-СЃС‚СЂР°РЅРёС†Р°Рј, РЅРѕ РїСЂРѕРіСЂР°РјРјРЅС‹Р№ РєРѕРґ РјРѕР¶РЅРѕ РІРєР»СЋС‡Р°С‚СЊ Рё РЅРµРїРѕСЃСЂРµРґСЃС‚РІРµРЅРЅРѕ РІ РєРѕРґ СЃС‚СЂР°РЅРёС†С‹. Р’СЃС‘ СЌС‚Рѕ РґРµР»Р°РµС‚СЃСЏ СЃ РїРѕРјРѕС‰СЊСЋ С‚РµРіР° <script>. РљРѕРіРґР° Р±СЂР°СѓР·РµСЂ РѕР±РЅР°СЂСѓР¶РёРІР°РµС‚ С‚Р°РєРѕР№ РєРѕРґ, РѕРЅ РІС‹РїРѕР»РЅСЏРµС‚ РµРіРѕ. РџРѕРґСЂРѕР±РЅРѕСЃС‚Рё Рѕ С‚РµРіРµ script РјРѕР¶РЅРѕ РїРѕСЃРјРѕС‚СЂРµС‚СЊ РЅР° СЃР°Р№С‚Рµ w3school.com. Р’ С‡Р°СЃС‚РЅРѕСЃС‚Рё, СЂР°СЃСЃРјРѕС‚СЂРёРј РїСЂРёРјРµСЂ, РґРµРјРѕРЅСЃС‚СЂРёСЂСѓСЋС‰РёР№ СЂР°Р±РѕС‚Сѓ СЃ РІРµР±-СЃС‚СЂР°РЅРёС†РµР№ СЃСЂРµРґСЃС‚РІР°РјРё JavaScript, РїСЂРёРІРµРґС‘РЅРЅС‹Р№ РЅР° СЌС‚РѕРј СЂРµСЃСѓСЂСЃРµ. Р­С‚РѕС‚ РїСЂРёРјРµСЂ РјРѕР¶РЅРѕ Р·Р°РїСѓСЃС‚РёС‚СЊ Рё СЃСЂРµРґСЃС‚РІР°РјРё РґР°РЅРЅРѕРіРѕ СЂРµСЃСѓСЂСЃР° (РёС‰РёС‚Рµ РєРЅРѕРїРєСѓ Try it Yourself), РЅРѕ РјС‹ РїРѕСЃС‚СѓРїРёРј РЅРµРјРЅРѕРіРѕ РёРЅР°С‡Рµ. Рђ РёРјРµРЅРЅРѕ, СЃРѕР·РґР°РґРёРј РІ РєР°РєРѕРј-РЅРёР±СѓРґСЊ С‚РµРєСЃС‚РѕРІРѕРј СЂРµРґР°РєС‚РѕСЂРµ (РЅР°РїСЂРёРјРµСЂ вЂ” РІ VS Code РёР»Рё РІ Notepad++) РЅРѕРІС‹Р№ С„Р°Р№Р», РєРѕС‚РѕСЂС‹Р№ РЅР°Р·РѕРІС‘Рј hello.html, Рё РґРѕР±Р°РІРёРј РІ РЅРµРіРѕ СЃР»РµРґСѓСЋС‰РёР№ РєРѕРґ:"
			]
		},
		{
			id: "8",
			type: ArticleBlockType.IMAGE,
			src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
			title: "Р РёСЃСѓРЅРѕРє 1 - СЃРєСЂРёРЅС€РѕС‚ СЃР°Р№С‚Р°"
		},
		{
			id: "9",
			type: ArticleBlockType.TEXT,
			title: "Р—Р°РіРѕР»РѕРІРѕРє СЌС‚РѕРіРѕ Р±Р»РѕРєР°",
			paragraphs: [
				"JavaScript вЂ” СЌС‚Рѕ СЏР·С‹Рє, РїСЂРѕРіСЂР°РјРјС‹ РЅР° РєРѕС‚РѕСЂРѕРј РјРѕР¶РЅРѕ РІС‹РїРѕР»РЅСЏС‚СЊ РІ СЂР°Р·РЅС‹С… СЃСЂРµРґР°С…. Р’ РЅР°С€РµРј СЃР»СѓС‡Р°Рµ СЂРµС‡СЊ РёРґС‘С‚ Рѕ Р±СЂР°СѓР·РµСЂР°С… Рё Рѕ СЃРµСЂРІРµСЂРЅРѕР№ РїР»Р°С‚С„РѕСЂРјРµ Node.js. Р•СЃР»Рё РґРѕ СЃРёС… РїРѕСЂ РІС‹ РЅРµ РЅР°РїРёСЃР°Р»Рё РЅРё СЃС‚СЂРѕС‡РєРё РєРѕРґР° РЅР° JS Рё С‡РёС‚Р°РµС‚Рµ СЌС‚РѕС‚ С‚РµРєСЃС‚ РІ Р±СЂР°СѓР·РµСЂРµ, РЅР° РЅР°СЃС‚РѕР»СЊРЅРѕРј РєРѕРјРїСЊСЋС‚РµСЂРµ, СЌС‚Рѕ Р·РЅР°С‡РёС‚, С‡С‚Рѕ РІС‹ Р±СѓРєРІР°Р»СЊРЅРѕ РІ СЃС‡РёС‚Р°РЅРЅС‹С… СЃРµРєСѓРЅРґР°С… РѕС‚ СЃРІРѕРµР№ РїРµСЂРІРѕР№ JavaScript-РїСЂРѕРіСЂР°РјРјС‹."
			]
		}
	]
}

export const Primary = Template.bind({})
Primary.args = {
}
Primary.decorators = [StoreDecorator({
	articleDetails: {
		data: article
	}
})]

export const Loading = Template.bind({})
Loading.args = {
}
Loading.decorators = [StoreDecorator({
	articleDetails: {
		isLoading: true
	}
})]

export const Error = Template.bind({})
Error.args = {
}
Error.decorators = [StoreDecorator({
	articleDetails: {
		error: 'Error'
	}
})]

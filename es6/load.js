/*!
 *  Bayrell Common Languages Transcompiler
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

 
$load.subscribe(["bayrell_rtl_loaded", "bayrell_parser_loaded"], function(){
	$load([
		"/assets/bayrell_lang_es6/CommonParser.js",
		"/assets/bayrell_lang_es6/CommonTranslator.js",
	])
	.load([
		"/assets/bayrell_lang_es6/LangBay/ParserBay.js",
		"/assets/bayrell_lang_es6/LangES6/TranslatorES6.js",
	])
	.success(function(){
		$load.deliver('bayrell_lang_loaded');
	});
});	



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


module.exports = {
	VERSION: '0.2.0',
	'LangBay': {
		'ParserBay': require("./LangBay/ParserBay.js"),
	},
	'LangES6': {
		'TranslatorES6': require("./LangES6/TranslatorES6.js"),
	},
	'OpCodes': {
		'BaseOpCode': require("./OpCodes/BaseOpCode.js"),
		'OpArray': require("./OpCodes/OpArray.js"),
		'OpCmp': require("./OpCodes/OpCmp.js"),
		'OpDiv': require("./OpCodes/OpDiv.js"),
		'OpInc': require("./OpCodes/OpInc.js"),
		'OpMult': require("./OpCodes/OpMult.js"),
		'OpNope': require("./OpCodes/OpNope.js"),
		'OpPostDec': require("./OpCodes/OpPostDec.js"),
		'OpPreDec': require("./OpCodes/OpPreDec.js"),
		'OpSub': require("./OpCodes/OpSub.js"),
		'OpAdd': require("./OpCodes/OpAdd.js"),
		'OpCalc': require("./OpCodes/OpCalc.js"),
		'OpConcat': require("./OpCodes/OpConcat.js"),
		'OpFixed': require("./OpCodes/OpFixed.js"),
		'OpLink': require("./OpCodes/OpLink.js"),
		'OpNeg': require("./OpCodes/OpNeg.js"),
		'OpNot': require("./OpCodes/OpNot.js"),
		'OpPostInc': require("./OpCodes/OpPostInc.js"),
		'OpPreInc': require("./OpCodes/OpPreInc.js"),
		'OpTernary': require("./OpCodes/OpTernary.js"),
		'OpAnd': require("./OpCodes/OpAnd.js"),
		'OpClone': require("./OpCodes/OpClone.js"),
		'OpDec': require("./OpCodes/OpDec.js"),
		'OpFlags': require("./OpCodes/OpFlags.js"),
		'OpMod': require("./OpCodes/OpMod.js"),
		'OpNew': require("./OpCodes/OpNew.js"),
		'OpOr': require("./OpCodes/OpOr.js"),
		'OpPow': require("./OpCodes/OpPow.js"),
		'OpString': require("./OpCodes/OpString.js"),
	},
	'CommonParser': require("./CommonParser.js"),
	'CommonTranslator': require("./CommonTranslator.js"),
	'ModuleDescription': require("./ModuleDescription.js"),
};



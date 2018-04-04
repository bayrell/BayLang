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
		"/assets/bayrell_lang_es6/LangConstant.js",
		"/assets/bayrell_lang_es6/ModuleDescription.js",
		"/assets/bayrell_lang_es6/OutputContainer.js",
		"/assets/bayrell_lang_es6/OpCodes/BaseOpCode.js",
		"/assets/bayrell_lang_es6/Exceptions/EndOfStringExpected.js",
		"/assets/bayrell_lang_es6/Exceptions/HexNumberExpected.js",
		"/assets/bayrell_lang_es6/Exceptions/TwiceDeclareElseError.js",
	])
	.load([
		"/assets/bayrell_lang_es6/OpCodes/OpValue1.js",
		"/assets/bayrell_lang_es6/OpCodes/OpValue2.js",
		"/assets/bayrell_lang_es6/OpCodes/OpValueString.js",
		"/assets/bayrell_lang_es6/OpCodes/OpChilds.js",
	])
	.load([
		"/assets/bayrell_lang_es6/LangBay/ParserBay.js",
		"/assets/bayrell_lang_es6/LangBay/ParserBayNameToken.js",
		"/assets/bayrell_lang_es6/LangBay/ParserBayToken.js",
		"/assets/bayrell_lang_es6/LangES6/TranslatorES6.js",
		"/assets/bayrell_lang_es6/OpCodes/OpAdd.js",
		"/assets/bayrell_lang_es6/OpCodes/OpAnd.js",
		"/assets/bayrell_lang_es6/OpCodes/OpArray.js",
		"/assets/bayrell_lang_es6/OpCodes/OpAssign.js",
		"/assets/bayrell_lang_es6/OpCodes/OpAssignDeclare.js",
		"/assets/bayrell_lang_es6/OpCodes/OpBitAnd.js",
		"/assets/bayrell_lang_es6/OpCodes/OpBitNot.js",
		"/assets/bayrell_lang_es6/OpCodes/OpBitOr.js",
		"/assets/bayrell_lang_es6/OpCodes/OpBitXor.js",
		"/assets/bayrell_lang_es6/OpCodes/OpBreak.js",
		"/assets/bayrell_lang_es6/OpCodes/OpCall.js",
		"/assets/bayrell_lang_es6/OpCodes/OpCallAwait.js",
		"/assets/bayrell_lang_es6/OpCodes/OpClassDeclare.js",
		"/assets/bayrell_lang_es6/OpCodes/OpClone.js",
		"/assets/bayrell_lang_es6/OpCodes/OpCompare.js",
		"/assets/bayrell_lang_es6/OpCodes/OpConcat.js",
		"/assets/bayrell_lang_es6/OpCodes/OpContinue.js",
		"/assets/bayrell_lang_es6/OpCodes/OpDelete.js",
		"/assets/bayrell_lang_es6/OpCodes/OpDiv.js",
		"/assets/bayrell_lang_es6/OpCodes/OpDynamic.js",
		"/assets/bayrell_lang_es6/OpCodes/OpFlags.js",
		"/assets/bayrell_lang_es6/OpCodes/OpFor.js",
		"/assets/bayrell_lang_es6/OpCodes/OpFunctionDeclare.js",
		"/assets/bayrell_lang_es6/OpCodes/OpHexNumber.js",
		"/assets/bayrell_lang_es6/OpCodes/OpIdentifier.js",	
		"/assets/bayrell_lang_es6/OpCodes/OpIf.js",
		"/assets/bayrell_lang_es6/OpCodes/OpIfElse.js",
		"/assets/bayrell_lang_es6/OpCodes/OpMod.js",
		"/assets/bayrell_lang_es6/OpCodes/OpMult.js",
		"/assets/bayrell_lang_es6/OpCodes/OpNamespace.js",
		"/assets/bayrell_lang_es6/OpCodes/OpNew.js",
		"/assets/bayrell_lang_es6/OpCodes/OpNope.js",
		"/assets/bayrell_lang_es6/OpCodes/OpNot.js",
		"/assets/bayrell_lang_es6/OpCodes/OpNumber.js",
		"/assets/bayrell_lang_es6/OpCodes/OpOr.js",
		"/assets/bayrell_lang_es6/OpCodes/OpPostDec.js",
		"/assets/bayrell_lang_es6/OpCodes/OpPostInc.js",
		"/assets/bayrell_lang_es6/OpCodes/OpPow.js",
		"/assets/bayrell_lang_es6/OpCodes/OpPreDec.js",
		"/assets/bayrell_lang_es6/OpCodes/OpPreInc.js",
		"/assets/bayrell_lang_es6/OpCodes/OpReturn.js",
		"/assets/bayrell_lang_es6/OpCodes/OpShiftLeft.js",
		"/assets/bayrell_lang_es6/OpCodes/OpShiftRight.js",
		"/assets/bayrell_lang_es6/OpCodes/OpStatic.js",
		"/assets/bayrell_lang_es6/OpCodes/OpString.js",
		"/assets/bayrell_lang_es6/OpCodes/OpSub.js",
		"/assets/bayrell_lang_es6/OpCodes/OpTemplateIdentifier.js",
		"/assets/bayrell_lang_es6/OpCodes/OpTernary.js",
		"/assets/bayrell_lang_es6/OpCodes/OpThrow.js",
		"/assets/bayrell_lang_es6/OpCodes/OpTryCatch.js",
		"/assets/bayrell_lang_es6/OpCodes/OpTryCatchChilds.js",
		"/assets/bayrell_lang_es6/OpCodes/OpUse.js",
		"/assets/bayrell_lang_es6/OpCodes/OpWhile.js",
	])
	.load([
		"/assets/bayrell_lang_es6/LangNodeJS/TranslatorNodeJS.js",
	])
	.success(function(){
		$load.deliver('bayrell_lang_loaded');
	});
});	



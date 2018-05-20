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

 
$load.subscribe(["BayrellRtl_loaded", "BayrellParser_loaded"], function(){
	$load([
		"/assets/BayrellLang/CommonParser.js",
		"/assets/BayrellLang/CommonTranslator.js",
		"/assets/BayrellLang/LangConstant.js",
		"/assets/BayrellLang/ModuleDescription.js",
		"/assets/BayrellLang/Utils.js",
		"/assets/BayrellLang/OpCodes/BaseOpCode.js",
		"/assets/BayrellLang/Exceptions/EndOfStringExpected.js",
		"/assets/BayrellLang/Exceptions/HexNumberExpected.js",
		"/assets/BayrellLang/Exceptions/TwiceDeclareElseError.js",
	])
	.load([
		"/assets/BayrellLang/OpCodes/OpValue1.js",
		"/assets/BayrellLang/OpCodes/OpValue2.js",
		"/assets/BayrellLang/OpCodes/OpValueString.js",
		"/assets/BayrellLang/OpCodes/OpChilds.js",
	])
	.load([
		"/assets/BayrellLang/LangBay/ParserBay.js",
		"/assets/BayrellLang/LangBay/ParserBayFactory.js",
		"/assets/BayrellLang/LangBay/ParserBayNameToken.js",
		"/assets/BayrellLang/LangBay/ParserBayToken.js",
		"/assets/BayrellLang/LangES6/TranslatorES6.js",
		"/assets/BayrellLang/LangES6/TranslatorES6Factory.js",
		"/assets/BayrellLang/OpCodes/OpAdd.js",
		"/assets/BayrellLang/OpCodes/OpAnd.js",
		"/assets/BayrellLang/OpCodes/OpArray.js",
		"/assets/BayrellLang/OpCodes/OpAssign.js",
		"/assets/BayrellLang/OpCodes/OpAssignDeclare.js",
		"/assets/BayrellLang/OpCodes/OpBitAnd.js",
		"/assets/BayrellLang/OpCodes/OpBitNot.js",
		"/assets/BayrellLang/OpCodes/OpBitOr.js",
		"/assets/BayrellLang/OpCodes/OpBitXor.js",
		"/assets/BayrellLang/OpCodes/OpBreak.js",
		"/assets/BayrellLang/OpCodes/OpCall.js",
		"/assets/BayrellLang/OpCodes/OpCallAwait.js",
		"/assets/BayrellLang/OpCodes/OpClassDeclare.js",
		"/assets/BayrellLang/OpCodes/OpClone.js",
		"/assets/BayrellLang/OpCodes/OpComment.js",
		"/assets/BayrellLang/OpCodes/OpCompare.js",
		"/assets/BayrellLang/OpCodes/OpConcat.js",
		"/assets/BayrellLang/OpCodes/OpContinue.js",
		"/assets/BayrellLang/OpCodes/OpDelete.js",
		"/assets/BayrellLang/OpCodes/OpDiv.js",
		"/assets/BayrellLang/OpCodes/OpDynamic.js",
		"/assets/BayrellLang/OpCodes/OpFlags.js",
		"/assets/BayrellLang/OpCodes/OpFor.js",
		"/assets/BayrellLang/OpCodes/OpFunctionDeclare.js",
		"/assets/BayrellLang/OpCodes/OpHexNumber.js",
		"/assets/BayrellLang/OpCodes/OpIdentifier.js",	
		"/assets/BayrellLang/OpCodes/OpIf.js",
		"/assets/BayrellLang/OpCodes/OpIfElse.js",
		"/assets/BayrellLang/OpCodes/OpMap.js",
		"/assets/BayrellLang/OpCodes/OpMod.js",
		"/assets/BayrellLang/OpCodes/OpMult.js",
		"/assets/BayrellLang/OpCodes/OpNamespace.js",
		"/assets/BayrellLang/OpCodes/OpNew.js",
		"/assets/BayrellLang/OpCodes/OpNope.js",
		"/assets/BayrellLang/OpCodes/OpNot.js",
		"/assets/BayrellLang/OpCodes/OpNumber.js",
		"/assets/BayrellLang/OpCodes/OpOr.js",
		"/assets/BayrellLang/OpCodes/OpPostDec.js",
		"/assets/BayrellLang/OpCodes/OpPostInc.js",
		"/assets/BayrellLang/OpCodes/OpPow.js",
		"/assets/BayrellLang/OpCodes/OpPreDec.js",
		"/assets/BayrellLang/OpCodes/OpPreInc.js",
		"/assets/BayrellLang/OpCodes/OpPreprocessorCase.js",
		"/assets/BayrellLang/OpCodes/OpPreprocessorSwitch.js",
		"/assets/BayrellLang/OpCodes/OpReturn.js",
		"/assets/BayrellLang/OpCodes/OpShiftLeft.js",
		"/assets/BayrellLang/OpCodes/OpShiftRight.js",
		"/assets/BayrellLang/OpCodes/OpStatic.js",
		"/assets/BayrellLang/OpCodes/OpString.js",
		"/assets/BayrellLang/OpCodes/OpSub.js",
		"/assets/BayrellLang/OpCodes/OpTemplateIdentifier.js",
		"/assets/BayrellLang/OpCodes/OpTernary.js",
		"/assets/BayrellLang/OpCodes/OpThrow.js",
		"/assets/BayrellLang/OpCodes/OpTryCatch.js",
		"/assets/BayrellLang/OpCodes/OpTryCatchChilds.js",
		"/assets/BayrellLang/OpCodes/OpUse.js",
		"/assets/BayrellLang/OpCodes/OpVector.js",
		"/assets/BayrellLang/OpCodes/OpWhile.js",
	])
	.load([
		"/assets/BayrellLang/OpCodes/OpInterfaceDeclare.js",
		"/assets/BayrellLang/LangNodeJS/TranslatorNodeJS.js",
		"/assets/BayrellLang/LangNodeJS/TranslatorNodeJSFactory.js",
		"/assets/BayrellLang/LangPHP/TranslatorPHP.js",
		"/assets/BayrellLang/LangPHP/TranslatorPHPFactory.js",
	])
	.success(function(){
		$load.deliver('BayrellLang_loaded');
	});
});	



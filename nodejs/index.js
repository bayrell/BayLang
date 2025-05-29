/*!
 *  BayLang Technology
 *
 *  (c) Copyright 2016-2024 "Ildar Bikmamatov" <support@bayrell.org>
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

var exports = {
	MODULE_NAME: 'BayLang',
}

function add(name)
{
	var module_name = exports.MODULE_NAME;
	
	name = name
		.substr(module_name.length + 1)
		.replace(new RegExp("\\.", "g"), "/")
	;
	
	var path = __dirname + "/" + name + ".js";
	return require(path);
}

add("BayLang.Exceptions.ParserUnknownError");
add("BayLang.OpCodes.BaseOpCode");
add("BayLang.Caret");
add("BayLang.CoreParser");
add("BayLang.CoreToken");
add("BayLang.CoreTranslator");
add("BayLang.LangUtils");
add("BayLang.ModuleDescription");
add("BayLang.SaveOpCode");
add("BayLang.TokenReader");
add("BayLang.Compiler.Commands.Compile");
add("BayLang.Compiler.Commands.Version");
add("BayLang.Compiler.ConsoleApp");
add("BayLang.Compiler.Module");
add("BayLang.Compiler.ModuleDescription");
add("BayLang.Compiler.SettingsProvider");
add("BayLang.Exceptions.ParserEOF");
add("BayLang.Exceptions.ParserError");
add("BayLang.Exceptions.ParserExpected");
add("BayLang.Exceptions.DeclaredClass");
add("BayLang.LangBay.ParserBay");
add("BayLang.LangBay.ParserBayBase");
add("BayLang.LangBay.ParserBayExpression");
add("BayLang.LangBay.ParserBayFunction");
add("BayLang.LangBay.ParserBayHtml");
add("BayLang.LangBay.ParserBayOperator");
add("BayLang.LangBay.ParserBayPreprocessor");
add("BayLang.LangBay.ParserBayProgram");
add("BayLang.LangBay.TranslatorBay");
add("BayLang.LangBay.TranslatorBayExpression");
add("BayLang.LangBay.TranslatorBayHtml");
add("BayLang.LangBay.TranslatorBayOperator");
add("BayLang.LangBay.TranslatorBayProgram");
add("BayLang.LangES6.ParserES6");
add("BayLang.LangES6.ParserES6Base");
add("BayLang.LangES6.ParserES6Expression");
add("BayLang.LangES6.ParserES6Function");
add("BayLang.LangES6.ParserES6Operator");
add("BayLang.LangES6.ParserES6Program");
add("BayLang.LangES6.TranslatorES6");
add("BayLang.LangES6.TranslatorES6Expression");
add("BayLang.LangES6.TranslatorES6Html");
add("BayLang.LangES6.TranslatorES6Operator");
add("BayLang.LangES6.TranslatorES6Program");
add("BayLang.LangNode.TranslatorNode");
add("BayLang.LangNode.TranslatorNodeExpression");
add("BayLang.LangNode.TranslatorNodeProgram");
add("BayLang.LangPHP.ParserPHP");
add("BayLang.LangPHP.ParserPHPBase");
add("BayLang.LangPHP.ParserPHPExpression");
add("BayLang.LangPHP.ParserPHPFunction");
add("BayLang.LangPHP.ParserPHPOperator");
add("BayLang.LangPHP.ParserPHPProgram");
add("BayLang.LangPHP.TranslatorPHP");
add("BayLang.LangPHP.TranslatorPHPExpression");
add("BayLang.LangPHP.TranslatorPHPHtml");
add("BayLang.LangPHP.TranslatorPHPOperator");
add("BayLang.LangPHP.TranslatorPHPProgram");
add("BayLang.OpCodes.OpAnnotation");
add("BayLang.OpCodes.OpAssign");
add("BayLang.OpCodes.OpAssignStruct");
add("BayLang.OpCodes.OpAssignValue");
add("BayLang.OpCodes.OpAttr");
add("BayLang.OpCodes.OpBreak");
add("BayLang.OpCodes.OpCall");
add("BayLang.OpCodes.OpClassOf");
add("BayLang.OpCodes.OpClassRef");
add("BayLang.OpCodes.OpCollection");
add("BayLang.OpCodes.OpComment");
add("BayLang.OpCodes.OpContinue");
add("BayLang.OpCodes.OpCurry");
add("BayLang.OpCodes.OpCurryArg");
add("BayLang.OpCodes.OpDeclareClass");
add("BayLang.OpCodes.OpDeclareFunction");
add("BayLang.OpCodes.OpDeclareFunctionArg");
add("BayLang.OpCodes.OpDelete");
add("BayLang.OpCodes.OpDict");
add("BayLang.OpCodes.OpDictPair");
add("BayLang.OpCodes.OpEntityName");
add("BayLang.OpCodes.OpFlags");
add("BayLang.OpCodes.OpFor");
add("BayLang.OpCodes.OpHtmlAttribute");
add("BayLang.OpCodes.OpHtmlContent");
add("BayLang.OpCodes.OpHtmlItems");
add("BayLang.OpCodes.OpHtmlSlot");
add("BayLang.OpCodes.OpHtmlStyle");
add("BayLang.OpCodes.OpHtmlTag");
add("BayLang.OpCodes.OpHtmlValue");
add("BayLang.OpCodes.OpIdentifier");
add("BayLang.OpCodes.OpIf");
add("BayLang.OpCodes.OpIfElse");
add("BayLang.OpCodes.OpInc");
add("BayLang.OpCodes.OpItems");
add("BayLang.OpCodes.OpMath");
add("BayLang.OpCodes.OpMethod");
add("BayLang.OpCodes.OpModule");
add("BayLang.OpCodes.OpNamespace");
add("BayLang.OpCodes.OpNegative");
add("BayLang.OpCodes.OpNew");
add("BayLang.OpCodes.OpNumber");
add("BayLang.OpCodes.OpPipe");
add("BayLang.OpCodes.OpPreprocessorIfCode");
add("BayLang.OpCodes.OpPreprocessorIfDef");
add("BayLang.OpCodes.OpPreprocessorSwitch");
add("BayLang.OpCodes.OpReturn");
add("BayLang.OpCodes.OpString");
add("BayLang.OpCodes.OpTernary");
add("BayLang.OpCodes.OpTryCatch");
add("BayLang.OpCodes.OpTryCatchItem");
add("BayLang.OpCodes.OpThrow");
add("BayLang.OpCodes.OpTypeConvert");
add("BayLang.OpCodes.OpTypeIdentifier");
add("BayLang.OpCodes.OpUse");
add("BayLang.OpCodes.OpWhile");
add("BayLang.OpCodes.OpWidget");
add("BayLang.OpCodes.OpWidgetData");

/* Test */
add("BayLang.Test.LangBay.Base");
add("BayLang.Test.LangBay.Expression");
add("BayLang.Test.LangBay.Html");
add("BayLang.Test.LangBay.Operator");
add("BayLang.Test.LangBay.Program");
add("BayLang.Test.LangBay.Style");
add("BayLang.Test.Translator.Base");
add("BayLang.Test.Translator.Expression");
add("BayLang.Test.Translator.Operator");
add("BayLang.Test.ModuleDescription");

var use = require('bay-lang').use;
exports["VERSION"] = use("BayLang.ModuleDescription").getModuleVersion();

module.exports = exports;

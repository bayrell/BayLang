var bayrell_rtl = require('bayrell_rtl');
var rtl = bayrell_rtl.rtl;


base_path = '';
if (typeof __dirname != 'undefined') base_path = rtl.clone(__dirname);
else if (typeof global.__dirname != 'undefined') base_path = rtl.clone(global.__dirname);


module.exports = {
	'type': 1,
	'base_path': base_path,
	'files': [
		'CommonParser',
		'CommonTranslator',
		'LangConstant',
		'ModuleDescription',
		'OpCodes/BaseOpCode',
		'OpCodes/OpAdd',
		'OpCodes/OpAnd',
		'OpCodes/OpArray',
		'OpCodes/OpAssign',
		'OpCodes/OpAssignDeclare',
		'OpCodes/OpBitAnd',
		'OpCodes/OpBitNot',
		'OpCodes/OpBitOr',
		'OpCodes/OpBitXor',
		'OpCodes/OpBreak',
		'OpCodes/OpCall',
		'OpCodes/OpCallAwait',
		'OpCodes/OpChilds',
		'OpCodes/OpClone',
		'OpCodes/OpCompare',
		'OpCodes/OpConcat',
		'OpCodes/OpContinue',
		'OpCodes/OpDelete',
		'OpCodes/OpDiv',
		'OpCodes/OpDynamic',
		'OpCodes/OpFlags',
		'OpCodes/OpFor',
		'OpCodes/OpHexNumber',
		'OpCodes/OpIdentifier',
		'OpCodes/OpIf',
		'OpCodes/OpMod',
		'OpCodes/OpMult',
		'OpCodes/OpNamespace',
		'OpCodes/OpNew',
		'OpCodes/OpNope',
		'OpCodes/OpNot',
		'OpCodes/OpNumber',
		'OpCodes/OpOr',
		'OpCodes/OpPostDec',
		'OpCodes/OpPostInc',
		'OpCodes/OpPow',
		'OpCodes/OpPreDec',
		'OpCodes/OpPreInc',
		'OpCodes/OpReturn',
		'OpCodes/OpShiftLeft',
		'OpCodes/OpShiftRight',
		'OpCodes/OpStatic',
		'OpCodes/OpString',
		'OpCodes/OpSub',
		'OpCodes/OpTemplateIdentifier',
		'OpCodes/OpTernary',
		'OpCodes/OpThrow',
		'OpCodes/OpTryCatch',
		'OpCodes/OpUse',
		'OpCodes/OpWhile',
		'OpCodes/OpValue1',
		'OpCodes/OpValue2',
		'OpCodes/OpValueString',
		'LangBay/ParserBay',
		'LangBay/ParserBayToken',
		'LangES6/TranslatorES6',
		'Exceptions/EndOfStringExpected',
		'Exceptions/HexNumberExpected',
	],
};


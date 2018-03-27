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
		'OpCodes/OpCall',
		'OpCodes/OpCallAwait',
		'OpCodes/OpChilds',
		'OpCodes/OpClone',
		'OpCodes/OpCompare',
		'OpCodes/OpConcat',
		'OpCodes/OpDiv',
		'OpCodes/OpDynamic',
		'OpCodes/OpFlags',
		'OpCodes/OpHexNumber',
		'OpCodes/OpIdentifier',
		'OpCodes/OpMod',
		'OpCodes/OpMult',
		'OpCodes/OpNew',
		'OpCodes/OpNot',
		'OpCodes/OpNumber',
		'OpCodes/OpOr',
		'OpCodes/OpPostDec',
		'OpCodes/OpPostInc',
		'OpCodes/OpPow',
		'OpCodes/OpPreDec',
		'OpCodes/OpPreInc',
		'OpCodes/OpShiftLeft',
		'OpCodes/OpShiftRight',
		'OpCodes/OpStatic',
		'OpCodes/OpString',
		'OpCodes/OpSub',
		'OpCodes/OpTemplateIdentifier',
		'OpCodes/OpTernary',
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

